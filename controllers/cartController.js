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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.deleteProductFromCart = exports.getAllCarts = exports.addProductToCart = void 0;
var carts_1 = require("../models/carts");
var products_1 = require("../models/products");
var users_1 = require("../models/users");
var addProductToCart = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product, user, userCart, cart;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, products_1.Product.findById(req.params.productId)];
            case 1:
                product = _a.sent();
                if (!(product !== null)) return [3 /*break*/, 12];
                return [4 /*yield*/, users_1.User.findById(req.params.userId)];
            case 2:
                user = _a.sent();
                if (!(user !== null)) return [3 /*break*/, 10];
                if (!(user.accountType == "Buyer")) return [3 /*break*/, 8];
                return [4 /*yield*/, carts_1.Cart.findOne({ created_by: user._id })];
            case 3:
                userCart = _a.sent();
                if (!!userCart) return [3 /*break*/, 5];
                cart = new carts_1.Cart({
                    totalPrice: product.price,
                    products: product.name,
                    created_by: user._id
                });
                return [4 /*yield*/, cart.save()];
            case 4:
                _a.sent();
                res.status(201).json(cart);
                return [3 /*break*/, 7];
            case 5:
                userCart.totalPrice += product.price;
                userCart.products.push(product.name);
                return [4 /*yield*/, userCart.save()];
            case 6:
                _a.sent();
                res.status(201).json(userCart);
                _a.label = 7;
            case 7: return [3 /*break*/, 9];
            case 8:
                res.json("Only Buyer can Add Products");
                _a.label = 9;
            case 9: return [3 /*break*/, 11];
            case 10:
                res.json("There is no such user");
                _a.label = 11;
            case 11: return [3 /*break*/, 13];
            case 12:
                res.json("There is no such product");
                _a.label = 13;
            case 13: return [2 /*return*/];
        }
    });
}); };
exports.addProductToCart = addProductToCart;
var getAllCarts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, carts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, users_1.User.findById(req.params.id)];
            case 1:
                user = _a.sent();
                return [4 /*yield*/, carts_1.Cart.find({ created_by: user })];
            case 2:
                carts = _a.sent();
                res.json(carts);
                return [2 /*return*/];
        }
    });
}); };
exports.getAllCarts = getAllCarts;
var deleteProductFromCart = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product, user, userCart, i, index;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, products_1.Product.findById(req.params.productId)];
            case 1:
                product = _a.sent();
                if (!(product !== null)) return [3 /*break*/, 11];
                return [4 /*yield*/, users_1.User.findById(req.params.userId)];
            case 2:
                user = _a.sent();
                if (!(user !== null)) return [3 /*break*/, 9];
                if (!(user.accountType == "Buyer")) return [3 /*break*/, 7];
                return [4 /*yield*/, carts_1.Cart.findOne({ created_by: user._id })];
            case 3:
                userCart = _a.sent();
                if (!!userCart) return [3 /*break*/, 4];
                res.json("You Don't Have Cart");
                return [3 /*break*/, 6];
            case 4:
                userCart.totalPrice -= product.price;
                i = 0;
                index = 0;
                while (userCart.products.length) {
                    if (userCart.products[i] === product.name) {
                        index = i;
                        break;
                    }
                    i++;
                }
                userCart.products.splice(index, 1);
                return [4 /*yield*/, userCart.save()];
            case 5:
                _a.sent();
                res.status(201).json(userCart);
                _a.label = 6;
            case 6: return [3 /*break*/, 8];
            case 7:
                res.json("Only Buyer can delete Products");
                _a.label = 8;
            case 8: return [3 /*break*/, 10];
            case 9:
                res.json("There is no such user");
                _a.label = 10;
            case 10: return [3 /*break*/, 12];
            case 11:
                res.json("There is no such product");
                _a.label = 12;
            case 12: return [2 /*return*/];
        }
    });
}); };
exports.deleteProductFromCart = deleteProductFromCart;
