import { z } from "zod";

import { DeepPartial } from "typeorm";
import {
  contactSchema,
  createContactReturnSchema,
  createContactSchema,
} from "../../schemas";

type TContact = z.infer<typeof contactSchema>;
type TContactRequest = z.infer<typeof createContactSchema>;
type TContactResponse = z.infer<typeof createContactReturnSchema>;
type TContactPatch = DeepPartial<TContactRequest>;

export { TContact, TContactRequest, TContactResponse, TContactPatch };
