import { Storage } from "../interfaces/storage.interface";
import StorageModel from "../models/storage";

const registerUpload = async ({ fileName, path, idUser }: Storage) => {
  const responseItem = await StorageModel.create({ fileName, path, idUser });
  console.log({ responseItem });
  return responseItem;
};

export { registerUpload };
