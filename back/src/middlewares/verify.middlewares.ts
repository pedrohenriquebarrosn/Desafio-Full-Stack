import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User, Contact } from "../entities";
import { AppError } from "../errors";

const userEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const usersRepository: Repository<User> = AppDataSource.getRepository(User);

  const userEmail = req.body.email;

  if (userEmail) {
    const exists = await usersRepository.findOneBy({
      email: userEmail,
    });

    if (exists) {
      throw new AppError("Email already exists", 409);
    }
  }

  next();
};

const contactsEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const contactsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contactsEmail = req.body.email;

  if (contactsEmail) {
    const exists = await contactsRepository.findOneBy({
      email: contactsEmail,
    });

    if (exists) {
      throw new AppError("Email already exists", 409);
    }
  }

  next();
};

export default { userEmail, contactsEmail };
