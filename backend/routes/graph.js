import { Router } from "express";
import { fetchGraphData, uploadGraphData } from "../controllers/graph.js";

const router = Router();

router.route("/fetch").get(fetchGraphData);
router.route("/upload").post(uploadGraphData);

export default router;
