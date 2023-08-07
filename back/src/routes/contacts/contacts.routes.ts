import { Router } from "express";
import { contactsCotrollers } from "../../controllers";
import { validateMiddlewares, verifyMiddlewares } from "../../middlewares";
import { createUsersSchema, updateUsersSchema } from "../../schemas";
import usersRoutes from "../users/users.routes";

const contactsRoutes: Router = Router();

contactsRoutes.post(
  "",
  validateMiddlewares.body(createUsersSchema),
  verifyMiddlewares.userEmail,
  contactsCotrollers.create
);

contactsRoutes.get("", validateMiddlewares.token, contactsCotrollers.read);

contactsRoutes.patch(
  "/:id",
  verifyMiddlewares.userEmail,
  validateMiddlewares.token,
  validateMiddlewares.body(updateUsersSchema),
  contactsCotrollers.update
);

contactsRoutes.delete(
  "/:id",
  verifyMiddlewares.userEmail,
  validateMiddlewares.token,
  contactsCotrollers.destroy
);

export default contactsRoutes;
