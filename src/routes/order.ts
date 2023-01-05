import { Router } from "express";
import { getOrders } from "../controllers/order";
import { logMiddleware } from "../middlewares/log";
import { checkJWT } from "../middlewares/session";

const router = Router();

router.get("/", checkJWT, getOrders);

export { router };
