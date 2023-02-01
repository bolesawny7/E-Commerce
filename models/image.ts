import mongoose from "mongoose";
import { buffer } from "stream/consumers";

export const ImageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        data:Buffer,
        contentType: String
    }
})


