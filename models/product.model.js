const mongoose = require('mongoose');
const { Schema } = mongoose

const productSchema = new Schema({
    id:{
        type: String,
        requrired:true
    },
    product_name:{
        type: String,
        requrired:true
    },
    product_price:{
        type: String,
        requrired:true
    },
    type:{
        type: String,
        requrired:true
    },
    image_url:{
        type: String,
        requrired:true
    },
    description:{
        type: String,
        requrired:true
    }
})

module.exports = mongoose.model('Product', productSchema);