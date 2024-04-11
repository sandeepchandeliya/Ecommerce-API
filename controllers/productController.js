// IMPORTING THE PRODUCT MODEL
const Product = require('../models/productModel');


//CONTROLLER FUNCTION TO CREATE A NEW PRODUCT
exports.create = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    if (!name || !quantity) {
      return res.status(400).json({ error: 'Name and quantity are required' });
    }
    const newProduct = new Product({ name, quantity });
    
    // SAVE THE NEW PRODUCT TO THE DATABASE
    await newProduct.save();
    
    res.status(201).json({ data: { product: newProduct }, message: 'New product added successfully.' });
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CONTROLLER FUNCTION TO LIST ALL PRODUCT
exports.list = async (req, res) => {
  try {
    const products = await Product.find().lean();
    const formattedProducts = products.map((product, index) => ({
      id: index + 1,
      name: product.name,
      quantity: product.quantity,
    }));
    res.json({ data: { products: formattedProducts } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// CONTROLLER FUNCTION TO DELETE A PRODUCT BY ID
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.deleteOne({ _id: id });
    res.json({ data: { message: 'Product deleted' } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CONTROLLER FUNCTION TO UPDATE THE PRODUCT BY ID
exports.updateQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { number } = req.query;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    const newQty = product.quantity + parseInt(number, 10);
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { quantity: newQty },
      { new: true }
    );
    res.json({
      data: {
        product: updatedProduct,
        message: 'Updated successfully',
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
