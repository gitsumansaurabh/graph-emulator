import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes import
import graphRouter from "./routes/graph.js";

//Routes decleration
app.use("/api/v1/graph", graphRouter);

export { app };
