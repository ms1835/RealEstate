const express = require('express')
const app = express()
const router = express.Router()

app.get('/',(req,res)=> {
    try{
        res.send("hello")
    }catch(err){
        console.log(err)
    }
})

app.listen(process.env.PORT,()=> {
    console.log(`Server listening on port {process.env.PORT}`)
})