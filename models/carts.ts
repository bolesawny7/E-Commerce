import { Schema, model } from "mongoose";
import { Product } from "./products";
import mongoose from "mongoose";
const schema = new Schema({
    notes: {
        type: String
    },
    totalPrice: {
        type: Number,
        required: true
    },
    products: [Product.name],
    created_by: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});


export const Cart = model("Cart", schema)

// active record pattern

