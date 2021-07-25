const express = require('express')
const router = express.Router()

const buyer = require('../models/buyer')

router.route('/buyer').post((req,res,next) => {
    buyer.create(req.body,(error,data) => {
        if(error){
            return next(error)
        }else{
            console.log(data)
            res.json(data)
        }
    })
})

router.route('/').get((req,res) => {
    buyer.find((error,data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

module.exports = router