import express from "express";
import multer from "multer";
import { listTasks, addTask, editTask, removeTask, importTasksCSV } from "../controllers/tasksController.js";

const router = express.Router();
const upload = multer();

router.get("/tasks", listTasks);
router.post("/tasks", addTask);
router.put("/tasks/:id", editTask);
router.delete("/tasks/:id", removeTask);
router.post("/tasks/import", upload.single("file"), importTasksCSV);
