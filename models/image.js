"use strict";
exports.__esModule = true;
exports.ImageSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ImageSchema = new mongoose_1["default"].Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    }
});
