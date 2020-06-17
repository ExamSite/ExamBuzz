const express = require('express')

const app = express()

app.get('',(req,res)=>{
    res.send({status:"Ok",data:"this is a test api"})
})

app.listen(5000,()=>{console.log("server is running")})