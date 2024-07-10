const mongoose = require('mongoose');
const { Schema } = mongoose

const orderSchema = new Schema({
    productname:{
        type: String,
    },
    productprice:{
        type: String,
    },
    quantity: {
        type: Number,
    },
    name:{
        type: String,
    },
    phone:{
        type: String,
    },
    address:{
        type: String,
    }
},
    {
        timestamps: true,
    })

module.exports = mongoose.model('Order', orderSchema);