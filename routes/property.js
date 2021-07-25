const express = require('express')
const router = express.Router()

const property = require('../models/property')

router.route('/property').post((req,res,next) => {
    property.create(req.body, (error,data) => {
        if(error){
            return next(error)
        }else{
            console.log(data)
            res.json(data)
        }
    })
})

router.route('/').get((req,res) => {
    property.find((error,data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

module.exports = router