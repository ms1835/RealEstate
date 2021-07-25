const express = require('express')
const app = express()
const router = express.Router()
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const Property = require('./models/property')
const propertyRoute = require('./routes/property')
const sellerRoute = require('./routes/seller')
const buyerRoute = require('./routes/buyer')

// const db = require('./config')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/users',propertyRoute)
app.use('/deal',sellerRoute)
app.use('/add',buyerRoute)

const db = mongoose.connect(process.env.DB_URL,{useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true})
.then(()=>{
    console.log('Connected to database.')
}).catch((err)=>{
    console.log('Something went wrong')
    console.log(err)
})



// app.get('/property', async (req,res)=>{
//     try{
        
//         const foundProperty = await Property.find({},function(err,data){
//             if(err){
//                 res.send(err)
//             }else{
//                 // res.render('property',{properties:foundProperty})
//                 res.json(data)
//             }
//         })
//     }catch(err){
//         console.log(err)
//     }
// })

// app.get('/',(req,res)=> {
//     try{
//         res.send("hello")
//     }catch(err){
//         console.log(err)
//     }
// })

// app.post('/property',(req,res) => {
//     console.log(req.body)
//     const newProperty = {
//         name: req.body.name
//     }
//     console.log(req.body.name)
//     console.log(newProperty.name)
//     // const collection = db.mongoose.collection('Property')\
//     const addProperty = new Property(newProperty)
//     addProperty.save((err,data)=> {
//         if(err){
//             console.log(err)
//         }else{
//             res.send(data)
//             console.log("yeah done")
//         }
//     })
    // db.collection(Property).insertOne(req.body,(err,data)=>{
    //     if(err){
    //         console.log(err)
    //     }else{
    //         res.send(data)
    //     }
    // })
// })

// app.use('*',(req,res) => {
//     try{
//         res.send('Error page')
//     }catch(err){
//         console.log(err)
//     }
// })

app.listen(process.env.PORT,()=> {
    console.log(`Server listening on port ${process.env.PORT}`)
})