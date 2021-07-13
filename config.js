const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const db = mongoose.connect(process.env.DB_URL,{useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true})
.then(()=>{
    console.log('Connected to database.')
}).catch((err)=>{
    console.log('Something wenr wrong')
    console.log(err)
})


module.exports = db