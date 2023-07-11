import express from "express";
import controllers from "../controllers/index.js";
const router = express.Router();
router.get("/", controllers.getItem);
router.get("/:itemId");
router.post("/");
export default router;
