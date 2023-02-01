import mongoose from "mongoose";
var bodyParser = require('body-parser')
const multer = require('multer');

import { userRouter } from "./routers/userRouter";
import { productRouter } from "./routers/productRouter";
import { cartRouter } from "./routers/cartRouter";

//start
const express = require('express');
const app = express();
app.use(express.json());


app.use(userRouter);
app.use(productRouter);
app.use(cartRouter);


//middleware
mongoose.set('strictQuery', false);

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//database and server connection
mongoose.connect('mongodb://127.0.0.1:27017/ACMBackEndTask')
   .then(() => {
      app.listen(3000, () => {
         console.log('Server is running on port 3000');
      });
   })
   .catch(err => {
      console.error('failed to connect to mongodb', err);
      process.exit(1);
   })


