const mongoose = require('mongoose')

const sellerSchema = new mongoose.Schema({
    name: {type: String},
    mobile: {type: Number},
    aadhaar: {type: Number},
    address: {type: String},
},{timestamps:true})

const Seller = mongoose.model('Seller',sellerSchema)

module.exports = Seller