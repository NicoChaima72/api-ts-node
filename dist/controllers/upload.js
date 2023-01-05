"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFile = void 0;
const storage_1 = require("../services/storage");
const error_handle_1 = require("../utils/error.handle");
const getFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user, file } = req;
        const response = yield (0, storage_1.registerUpload)({
            idUser: user,
            fileName: file === null || file === void 0 ? void 0 : file.filename,
            path: file === null || file === void 0 ? void 0 : file.path,
        });
        res.send({ data: "SUBIDO" });
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_GET_ORDERS");
    }
});
exports.getFile = getFile;
