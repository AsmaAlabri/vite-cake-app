import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import myModel from "./models/myModel.js"

const myProj = new express()
myProj.use(express.json())
myProj.use(cors())

const myPort = 7600

myProj.listen(myPort, async() => {
    try {
        await mongoose.connect("mongodb+srv://studentUser:studentUser@cluster0.uqhgnwr.mongodb.net/Spring-25-26")
        console.log("Server running !")
    } catch(err) {
        console.log(err)
    }
})


myProj.get("/", async(req, res) => {
    try{
        const myData = await myModel.find()
        res.send(myData)
    }catch(err){
        console.log(err)
    }
})


// Write an API to send all the ducuments that has "cakeName" = "New Cake" using path "activity" 
myProj.get("/activity", async(req, res) => {
    try{
        // const myData = await myModel.find({cakeName:{$eq : "New Cake"}})
        const myData = await myModel.find({cakePrice:{$lt : 25}})
        res.send(myData)
    }catch(err){
        console.log(err)
    }
})




myProj.post("/addCake", async(req, res) => {
    try{
        await myModel.create(req.body)
        res.send("Cake Inserted Successfully ***** !")
    }catch(err){
        console.log(err)
    }
})


myProj.delete("/delCake/:myCakeCode", async(req, res) => {
    try{
        // const myResult = await myModel.find({cakeCode : {$eq : req.param.myCakeCode}})
        const searchCode = req.params.myCakeCode
        const myResult = await myModel.findOneAndDelete({cakeCode : {$eq : searchCode}})
        if(myResult === null){
            res.send("Cake Not Found !")
        }else {
            res.send("Cake Deleted !!!!")
        }
    }catch(err){
        console.log(err)
    }
})



myProj.get("/searchCake/:cakeId", async(req, res) => {
    try{
        const myData = await myModel.findOne({cakeCode: req.params.cakeId})
        console.log(myData)
        if(myData == null){
            res.send(0)
        }else {
            res.send(myData)
        }
    }catch(err){
        console.log(err)
    }
})


myProj.put("/editCake/:cakeId", async(req, res) => {
    try{
        const myData = await myModel.findOneAndUpdate(
            {
                cakeCode: req.params.cakeId
            },
            {
                cakeName : req.body.cakeName,
                cakePrice : req.body.cakePrice,
                cakeImage : req.body.cakeImage
            }
        )
        console.log(myData)
        res.send("Cake Updated !")
    }catch(err){
        console.log(err)
    }
})


