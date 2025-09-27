import express from "express";
import bodyParser from "body-parser";
import tasksRoutes from "./routes/tasksRoutes.js";

const app = express();
app.use(bodyParser.json());
app.use("/api", tasksRoutes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
