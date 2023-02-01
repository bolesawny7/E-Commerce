"use strict";
exports.__esModule = true;
exports.User = void 0;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        //makes special index by putting unique = true
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: Number,
    accountType: {
        type: String,
        required: true
    }
});
exports.User = (0, mongoose_1.model)("User", schema);
// active record pattern
