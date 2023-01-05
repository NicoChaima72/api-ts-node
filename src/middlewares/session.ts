import { NextFunction, Request, Response } from "express";
import { RequestExt } from "../interfaces/req-extends";
import { verifyToken } from "../utils/jwt.handle";

const checkJWT = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();

    const isUser = verifyToken(<string>jwt);

    if (!isUser) return res.status(401).send("JWT_NOT_VALID");

    req.user = { id: "0" };
    console.log(isUser);
    next();
  } catch (e) {
    res.status(400).send("SESSION_NOT_VALID");
  }
};

export { checkJWT };
