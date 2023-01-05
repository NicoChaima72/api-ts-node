import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth";
import { handleHttp } from "../utils/error.handle";
import { generateToken } from "../utils/jwt.handle";

const registerCtrl = async (req: Request, res: Response) => {
  try {
    console.log("ENTRANDOOO");

    const responseUser = await registerNewUser(req.body);
    res.send(responseUser);
  } catch (e) {
    handleHttp(res, "ERROR_REGISTER");
  }
};

const loginCtrl = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const responseUser = await loginUser({ email, password });

  if (["PASSWORD_INCORRECT", "NOT_FOUND_USER"].includes(<string>responseUser))
    return res.status(400).send(responseUser);

  res.send(responseUser);
};

export { registerCtrl, loginCtrl };
