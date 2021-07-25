const mongoose = require('mongoose')

const buyerSchema = new mongoose.Schema({
    name: {type: String},
    mobile: {type: Number},
    aadhaar: {type: Number},
    address: {type: String},
    pid: {type: String},
    sellDate: {type: String},
    soldBy: {type: String}
},{timestamps:true})

const Buyer = mongoose.model('Buyer',buyerSchema)

module.exports = Buyer