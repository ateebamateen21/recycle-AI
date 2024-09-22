const express=require('express')
const app=express()
const PORT=1234;

app.get('/',(req,res)=>{
    res.send("Server Is Running Succesfully")
})

app.listen(PORT,()=>{
    console.log("Server Is Running")
})