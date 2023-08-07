import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";
import { usersRoutes, contactsRoutes, loginRoutes } from "./routes";
import { handleErros } from "./errors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173/",
  })
);
app.use("/login", loginRoutes);
app.use("/users", usersRoutes);
app.use("/contacts", contactsRoutes);
app.use(handleErros);

export default app;
