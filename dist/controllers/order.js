"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = void 0;
const error_handle_1 = require("../utils/error.handle");
const getOrders = (req, res) => {
    try {
        res.send({ data: "ESTO SOLO LO PUEDE VER UNA PERSONA AUTENTICADA" });
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_GET_ORDERS");
    }
};
exports.getOrders = getOrders;
