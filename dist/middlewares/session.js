"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJWT = void 0;
const jwt_handle_1 = require("../utils/jwt.handle");
const checkJWT = (req, res, next) => {
    try {
        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser.split(" ").pop();
        const isUser = (0, jwt_handle_1.verifyToken)(jwt);
        if (!isUser)
            return res.status(401).send("JWT_NOT_VALID");
        req.user = { id: "0" };
        console.log(isUser);
        next();
    }
    catch (e) {
        res.status(400).send("SESSION_NOT_VALID");
    }
};
exports.checkJWT = checkJWT;
