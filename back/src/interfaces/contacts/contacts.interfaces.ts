import { z } from "zod";

import { DeepPartial } from "typeorm";
import {
  contactSchema,
  contactSchemaRequest,
  contactSchemaResponse,
} from "../../schemas";

type TContact = z.infer<typeof contactSchema>;
type TContactRequest = z.infer<typeof contactSchemaRequest>;
type TContactResponse = z.infer<typeof contactSchemaResponse>;
type TContactPatch = DeepPartial<TContactRequest>;

export { TContact, TContactRequest, TContactResponse, TContactPatch };
