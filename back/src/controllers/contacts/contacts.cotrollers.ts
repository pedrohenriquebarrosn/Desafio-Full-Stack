import { Request, Response } from "express";
import { contactsService } from "../../services";
import { TCreateUsers, TUpdateUsers } from "../../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const payload: TCreateUsers = req.body;

  const newUser = await contactsService.create(payload);

  return res.status(201).json(newUser);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const users = await contactsService.read();

  return res.json(users);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const payload: TUpdateUsers = req.body;

  const userId: number = Number(req.params.id);

  const updatedUser = await contactsService.update(payload, userId);

  return res.status(200).json(updatedUser);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  const userId: number = Number(req.params.id);

  await contactsService.destroy(userId);

  return res.status(204).send();
};

export default { create, read, update, destroy };
