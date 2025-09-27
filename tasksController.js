import { getTasks, getTaskById, createTask, updateTask, deleteTask } from "../models/taskModel.js";
import { parseCSV } from "../services/csvService.js";

export const listTasks = (req, res) => {
  const { title, description } = req.query;
  let filtered = getTasks();
  if (title) filtered = filtered.filter(t => t.title.includes(title));
  if (description) filtered = filtered.filter(t => t.description.includes(description));
  res.json(filtered);
};

export const addTask = (req, res) => {
  const task = createTask({ id: Date.now().toString(), ...req.body, completed: false });
  res.status(201).json(task);
};

export const editTask = (req, res) => {
  const updated = updateTask(req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: "Tarefa não encontrada" });
  res.json(updated);
};

export const removeTask = (req, res) => {
  const success = deleteTask(req.params.id);
  if (!success) return res.status(404).json({ error: "Tarefa não encontrada" });
  res.json({ message: "Tarefa removida" });
};

export const importTasksCSV = async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "Arquivo CSV não enviado" });
  const tasksImported = await parseCSV(req.file.buffer);
  tasksImported.forEach(task => createTask({ id: Date.now().toString(), ...task, completed: false }));
  res.json({ message: `${tasksImported.length} tarefas importadas` });
};
