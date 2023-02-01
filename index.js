"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var bodyParser = require('body-parser');
var multer = require('multer');
var userRouter_1 = require("./routers/userRouter");
var productRouter_1 = require("./routers/productRouter");
var cartRouter_1 = require("./routers/cartRouter");
//start
var express = require('express');
var app = express();
app.use(express.json());
app.use(userRouter_1.userRouter);
app.use(productRouter_1.productRouter);
app.use(cartRouter_1.cartRouter);
//middleware
mongoose_1["default"].set('strictQuery', false);
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//database and server connection
mongoose_1["default"].connect('mongodb://127.0.0.1:27017/ACMBackEndTask')
    .then(function () {
    app.listen(3000, function () {
        console.log('Server is running on port 3000');
    });
})["catch"](function (err) {
    console.error('failed to connect to mongodb', err);
    process.exit(1);
});
