import { Router } from "express";
import { validateMiddlewares, verifyMiddlewares } from "../../middlewares";
import { createUsersSchema, updateUsersSchema } from "../../schemas";
import { usersControllers } from "../../controllers";

const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  validateMiddlewares.body(createUsersSchema),
  verifyMiddlewares.userEmail,
  usersControllers.create
);

usersRoutes.get("", validateMiddlewares.token, usersControllers.read);

usersRoutes.patch(
  "/:id",
  verifyMiddlewares.userEmail,
  validateMiddlewares.token,
  validateMiddlewares.body(updateUsersSchema),
  usersControllers.update
);

usersRoutes.delete(
  "/:id",
  verifyMiddlewares.userEmail,
  validateMiddlewares.token,
  usersControllers.destroy
);

export default usersRoutes;
