import mongoose from "mongoose";
const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
})

export const Emergency = mongoose.model("Emergency",Schema)