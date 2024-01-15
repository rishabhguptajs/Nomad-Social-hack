import mongoose from "mongoose";

const userShema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 50,
        trim: true,
    },
    email: {
        type: String, 
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String, 
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String, 
        required: true,
    }
}, { timestamps: true });

export default mongoose.model("Users", userShema);