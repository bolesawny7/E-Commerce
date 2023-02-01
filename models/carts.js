"use strict";
exports.__esModule = true;
exports.Cart = void 0;
var mongoose_1 = require("mongoose");
var products_1 = require("./products");
var mongoose_2 = require("mongoose");
var schema = new mongoose_1.Schema({
    notes: {
        type: String
    },
    totalPrice: {
        type: Number,
        required: true
    },
    products: [products_1.Product.name],
    created_by: {
        required: true,
        type: mongoose_2["default"].Schema.Types.ObjectId,
        ref: 'User'
    }
});
exports.Cart = (0, mongoose_1.model)("Cart", schema);
// active record pattern
