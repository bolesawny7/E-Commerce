import { Schema, model } from "mongoose";
import mongoose from "mongoose";
import { ImageSchema } from "./image";

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        //makes special index by putting unique = true
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
    //to know date created at**
    { timestamps: true }
);


export const Product = model("Product", schema)

// active record pattern

