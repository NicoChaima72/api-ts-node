import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getOrders = (req: Request, res: Response) => {
  try {
    res.send({ data: "ESTO SOLO LO PUEDE VER UNA PERSONA AUTENTICADA" });
  } catch (e) {
    handleHttp(res, "ERROR_GET_ORDERS");
  }
};

export { getOrders };
