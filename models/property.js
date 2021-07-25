const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
    
    price: {type: Number},
    addressP: {type: String},
    city: {type: String},
    state: {type: String},
    area: {type: String},
    floor: {type: Number},
    room: {type: Number}

},{timestamps:true})
const Property = mongoose.model('Property',propertySchema)

module.exports = Property