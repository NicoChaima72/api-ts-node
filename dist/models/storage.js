"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const StorageSchema = new mongoose_1.Schema({ fileName: { type: String }, path: { type: String }, idUser: { type: String } }, { timestamps: true, versionKey: false });
const StorageModel = (0, mongoose_1.model)("storage", StorageSchema);
exports.default = StorageModel;
