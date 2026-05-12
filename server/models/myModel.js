import mongoose from "mongoose";

const mySchema = new mongoose.Schema(
    {
        "cakeCode" : {type: String, required : true},
        "cakeName" : {type : String},
        "cakePrice" : {type : Number},
        "cakeImage" : {type : String, default : "https://www.shutterstock.com/image-vector/delicious-vector-illustration-strawberry-cake-600nw-2700867405.jpg"}
    }
)

const myModel = new mongoose.model("cakes", mySchema)

export default myModel