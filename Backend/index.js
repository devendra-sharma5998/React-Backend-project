const express=require("express");

const data=require("./data")


const app=express();

const cors=require("cors")

app.use(cors({origin:"*"}))

app.get("/", (req,res)=>{
    console.log("working")
    res.json(data)
    res.end()
})

app.listen(4001, ()=>{
    // console.log("hellow ")
});