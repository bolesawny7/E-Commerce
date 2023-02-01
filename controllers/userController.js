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
exports.deleteUser = exports.updateUsers = exports.addUsers = exports.getUsersId = exports.getAllUsers = void 0;
var users_1 = require("../models/users");
// function to send users as json objects
var getAllUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, users_1.User.find()];
            case 1:
                users = _a.sent();
                res.json(users);
                return [2 /*return*/];
        }
    });
}); };
exports.getAllUsers = getAllUsers;
var getUsersId = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, users_1.User.findById(req.params.id)];
            case 1:
                user = _a.sent();
                res.json(user);
                return [2 /*return*/];
        }
    });
}); };
exports.getUsersId = getUsersId;
//adding users function
var addUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user = new users_1.User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    phoneNumber: req.body.phoneNumber,
                    accountType: req.body.accountType
                });
                return [4 /*yield*/, user.save()];
            case 1:
                _a.sent();
                //201 == created
                res.status(201).json(user);
                return [2 /*return*/];
        }
    });
}); };
exports.addUsers = addUsers;
var updateUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, users_1.User.findById(req.params.id)];
            case 1:
                user = _b.sent();
                Object.assign(user, req.body);
                user === null || user === void 0 ? void 0 : user.save();
                res.send({ data: user });
                return [3 /*break*/, 3];
            case 2:
                _a = _b.sent();
                res.status(404).send({ error: "User not Found" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateUsers = updateUsers;
var deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                return [4 /*yield*/, users_1.User.findById(req.params.id)];
            case 1:
                user = _b.sent();
                return [4 /*yield*/, (user === null || user === void 0 ? void 0 : user.remove())];
            case 2:
                _b.sent();
                res.send({ data: true });
                return [3 /*break*/, 4];
            case 3:
                _a = _b.sent();
                res.status(404).send({ error: "User not Found" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteUser = deleteUser;
/*
const updateUsers = (req, res) => {
    const { name, email, password, phoneNumber, accountType } = req.body;
    const { id } = req.params;
    let updatedUser = users.find((updatedUser) => updatedUser.id == id);
    if (!updatedUser) {
        res.json({
            message: "not found",
        });
    } else {
        updatedUser = {
            id: updatedUser.id,
            name: name || updatedUser.name,
            email: email || updatedUser.email,
            password: password || updatedUser.password,
            phoneNumber: phoneNumber || updatedUser.phoneNumber,
            accountType: accountType || updatedUser.accountType,
        };
        res.json(updatedUser);
    }
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id == id);
    if (!user) {
        res.json({
            message: "not found",
        });
    } else {
        const index = users.indexOf(user);
        users.splice(index, 1);
        res.json({
            message: "Deleted",
            users
        })
    }
};
*/
