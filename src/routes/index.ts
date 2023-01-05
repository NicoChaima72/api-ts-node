import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFilename = (filename: string): string => {
  const file = filename.split(".").shift() || "";
  return file;
};

readdirSync(PATH_ROUTER).filter((filename) => {
  const cleanName = cleanFilename(filename);
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter) => {
      console.log("Se está cargando la ruta " + cleanName);
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };
