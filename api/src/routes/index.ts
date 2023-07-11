import items from "./items.js";
import express from "express";

const router = express.Router();

router.use("/items", items);

export default router;
