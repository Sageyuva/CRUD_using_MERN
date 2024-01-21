const express = require ("express")
const cors = require ("cors")
const mongoose = require("mongoose")
const userModel = require ("./model/usermodel")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/crud");



app.get("/" , (req,res)=>{
    userModel.find({})
    .then(user => res.json(user))
    .catch(err => res.json((err)))
})

app.post("/adduser" , (req,res)=>{
    userModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json((err)))
})


app.delete("/deleteuser/:id" , (req,res)=>{
    const id = req.params.id
    userModel.findByIdAndDelete({_id: id})
    .then(user => res.json(user))
    .catch(err => res.json((err)))
})

app.get("/getuser/:id" ,(req,res)=> {
    const id = req.params.id;
    userModel.findById({_id:id})
    .then(user => res.json(user))
    .catch(err => res.send(err))
})


app.post("/updateuser/:id" , (req,res)=>{
    const id = req.params.id
    userModel.findByIdAndUpdate({_id:id},{name:req.body.name , email:req.body.email , age:req.body.age})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})


app.listen(3001 , (req,res)=>{
  console.log("server is running")
})

