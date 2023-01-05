import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";
import { logMiddleware } from "../middlewares/log";

const router = Router();

router.get("/", logMiddleware, getItems);
router.post("/", postItem);
router.get("/:id", getItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export { router };
