"use strict";
exports.__esModule = true;
exports.productRouter = void 0;
var express_1 = require("express");
var productController_1 = require("../controllers/productController");
var productController_2 = require("../controllers/productController");
exports.productRouter = (0, express_1.Router)();
exports.productRouter.get('/products', productController_2.getAllProducts);
exports.productRouter.post('/products', productController_1.addProduct);
