const express = require('express')
const router = express.Router()

const seller = require('../models/seller')

router.route('/seller').post((req,res,next) => {
    seller.create(req.body,(error,data) => {
        if(error){
            return next(error)
        }else{
            console.log(data)
            res.json(data)
        }
    })
})

router.route('/').get((req,res,next) => {
    seller.find((error,data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

module.exports = router