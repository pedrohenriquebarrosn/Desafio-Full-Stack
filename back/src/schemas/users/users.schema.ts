import { z } from "zod";

const usersSchema = z.object({
  id: z.number(),
  name: z.string().max(200),
  email: z.string().email().max(45),
  password: z.string().max(120),
  telefone: z.string().max(11),
  createdAt: z.string(),
});

const createUsersSchema = usersSchema.omit({
  id: true,
  createdAt: true,
});

const createUsersReturnSchema = usersSchema.omit({ password: true });

const getUsersSchema = createUsersReturnSchema.array();

const updateUsersSchema = usersSchema.partial().omit({ id: true });

const usersLoginSchema = usersSchema.pick({ email: true, password: true });

export {
  usersSchema,
  createUsersSchema,
  createUsersReturnSchema,
  getUsersSchema,
  updateUsersSchema,
  usersLoginSchema,
};
