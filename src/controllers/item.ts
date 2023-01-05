import { Request, Response } from "express";
import { getCar, getCars, insertCar, updateCar } from "../services/item";
import { handleHttp } from "../utils/error.handle";

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await getCar(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const postItem = async (req: Request, res: Response) => {
  try {
    const responseItem = await insertCar(req.body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_ITEM", e);
  }
};
const updateItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const responseItem = await updateCar(id, req.body);

    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const responseItem = await updateCar(id, req.body);

    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

export { getItem, getItems, updateItem, postItem, deleteItem };
