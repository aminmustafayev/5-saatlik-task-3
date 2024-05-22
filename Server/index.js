const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = 7777
const app = express()
app.use(cors())
app.use(express.json())

const ColoSchema = new mongoose.Schema({
    name:String,
    imgSrc:String,
    price:Number
})
const ColoModel = mongoose.model("Colo",ColoSchema)
app.get("/api/colo",async(req,res)=>{
    try {
        const colo = await ColoModel.find()
        res.send({
            message:"success",
            data:colo
        })
    } catch (error) {
        res.send({
            error:error
        })
    }
})
app.get("/api/colo/:id",async(req,res)=>{
    const{id}=req.params
    try {
        const colo = await ColoModel.findById(id)
        res.send({
            message:"success",
            data:colo
        })
    } catch (error) {
        res.send({
            error:error
        })
    }

})
app.delete("/api/colo/:id",async(req,res)=>{
    const{id}=req.params
    try {
        const colo = await ColoModel.findByIdAndDelete(id)
        res.send({
            message:"delete",
            data:colo
        })
    } catch (error) {
        res.send({
            error:error
        })
    }

})
app.post("/api/colo",async(req,res)=>{
    try {
        const colo = new ColoModel(req.body)
        await colo.save()
        res.send({
            message:"post",
            data:colo
        })
    } catch (error) {
        res.send({
            error:error
        })
    }
})



mongoose.connect("mongodb+srv://amin:amin123@products.vqzarfi.mongodb.net/").then(()=>{
    console.log("Connected")
})
app.listen(PORT,()=>{
    console.log("Port Listen",`${PORT}`)
})