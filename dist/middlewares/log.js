"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMiddleware = void 0;
const logMiddleware = (req, res, next) => {
    console.log("Hola soy el log");
    next();
};
exports.logMiddleware = logMiddleware;
