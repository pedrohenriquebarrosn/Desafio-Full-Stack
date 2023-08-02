import "reflect-metadata";
import "express-async-errors";
import express from "express";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/tasks", tasksRoutes);
app.use(handleAppError);

export default app;
