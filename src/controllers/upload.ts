import { Response } from "express";
import { RequestExt } from "../interfaces/req-extends";
import { registerUpload } from "../services/storage";
import { handleHttp } from "../utils/error.handle";

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    const response = await registerUpload({
      idUser: <string>user,
      fileName: <string>file?.filename,
      path: <string>file?.path,
    });

    res.send({ data: "SUBIDO" });
  } catch (e) {
    handleHttp(res, "ERROR_GET_ORDERS");
  }
};

export { getFile };
