import { Schema, model } from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        required: true,
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


export const User = model("User", schema)

// active record pattern

