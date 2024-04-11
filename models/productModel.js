// IMPORTING THE MONGOOSE MODULE
const mongoose = require('mongoose');

// CREATING PRODUCT SCHEMA USING MONGOOSE.SCHEMA
const productSchema = new mongoose.Schema({
  // FIELD FOR THE PRODUCT NAME
  name: {
    type: String,
    required: true,
  },
  // FIELD FOR THE QUANTITY OF THE PRODUCT
  quantity: {
    type: Number,
    required: true,
  },
});

// CREATING A NEW MONGOOSE MODEL FOR PRODUCT
const Product = mongoose.model('Product', productSchema);

// EXPORTING THE PRODUCT MODULE
module.exports = Product;
