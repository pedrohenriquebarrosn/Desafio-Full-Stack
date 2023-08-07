import { z } from "zod";

const contactSchema = z.object({
  id: z.number(),
  name: z.string().max(200),
  email: z.string().email().max(45),
  telefone: z.string().max(11),
  createdAt: z.string(),
});

const createContactSchema = contactSchema.omit({
  id: true,
  createdAt: true,
});

const createContactReturnSchema = contactSchema;

const updateContactSchema = contactSchema.partial();

export {
  contactSchema,
  createContactSchema,
  createContactReturnSchema,
  updateContactSchema,
};
