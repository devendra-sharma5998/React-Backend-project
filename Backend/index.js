const express=require("express");
const mongoClient = require('./Database/Connection')
const database = require('./Database/Connection')
const data=require("./data")


const app=express();

const cors=require("cors")

app.use(cors({origin:"*"}))

app.post('/insertData',async(req,res)=>{
try {
    const result = await mongoClient.insertDetails(data)
    res.send(result)
} catch (error) {
    console.log(error.message)
}
})
app.get('/all',async(req,res)=>{
    try {
        const result=await mongoClient.getDetails()
        res.send(result)
    } catch (error) {
        console.log(error.message)
    }
})
app.get("/", (req,res)=>{
    console.log("working")
    res.json(data)
    res.end()
})

app.listen(4001, ()=>{
    console.log("hellow ")
});