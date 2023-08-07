import { Repository } from "typeorm";

import {
  TCreateUsers,
  TCreateUsersReturn,
  TGetUsers,
  TUpdateUsers,
} from "../../interfaces/users/users.interfaces";
import { createUsersReturnSchema, getUsersSchema } from "../../schemas";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import { AppError } from "../../errors";

const create = async (payload: TCreateUsers): Promise<TCreateUsersReturn> => {
  const usersRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const user = usersRepository.create(payload);

  await usersRepository.save(user);

  const newUser = createUsersReturnSchema.parse(user);

  return newUser;
};

const read = async (): Promise<TGetUsers> => {
  const usersRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const findUsers: Array<Contact> = await usersRepository.find();

  const users = getUsersSchema.parse(findUsers);

  return users;
};

const update = async (
  payload: TUpdateUsers,
  userId: number
): Promise<TCreateUsersReturn> => {
  const usersRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const findUser: Contact | null = await usersRepository.findOneBy({
    id: userId,
  });

  if (!findUser) {
    throw new AppError("insuficient permission", 403);
  }

  const updateUser = usersRepository.create({
    ...findUser,
    ...payload,
  });

  await usersRepository.save(updateUser);

  const updatedUser = createUsersReturnSchema.parse(updateUser);

  return updatedUser;
};

const destroy = async (userId: number): Promise<void> => {
  const usersRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const user = await usersRepository.findOneBy({
    id: userId,
  });

  await usersRepository.softRemove(user!);
};

export default { create, read, update, destroy };
