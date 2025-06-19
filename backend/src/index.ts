import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/api/tasks", async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

app.post("/api/tasks", async (req, res) => {
  const { title, subtitle, progress, date } = req.body;
  const newTask = await prisma.task.create({
    data: { title, subtitle, progress, date },
  });
  res.json(newTask);
});

app.put("/api/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const { title, subtitle } = req.body;
  const updatedTask = await prisma.task.update({
    where: { id },
    data: { title, subtitle },
  });
  res.json(updatedTask);
});

app.delete("/api/tasks/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.task.delete({ where: { id } });
  res.sendStatus(204);
});

app.listen(5000, () =>
  console.log("🚀 Server running on http://localhost:5000")
);
