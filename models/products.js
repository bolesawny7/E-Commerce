"use strict";
exports.__esModule = true;
exports.Product = void 0;
var mongoose_1 = require("mongoose");
var mongoose_2 = require("mongoose");
var schema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        //makes special index by putting unique = true
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    created_by: {
        required: true,
        type: mongoose_2["default"].Schema.Types.ObjectId,
        ref: 'User'
    }
}, 
//to know date created at**
{ timestamps: true });
exports.Product = (0, mongoose_1.model)("Product", schema);
// active record pattern
