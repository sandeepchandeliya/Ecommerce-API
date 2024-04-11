// IMPORTING REQUIRED MODULES
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// DEFINING ROUTES AND ASSOCIATING THEM WITH CONTROLLER FUNCTIONS
router.post('/create', productController.create);
router.get('/', productController.list);
router.delete('/:id', productController.delete);
router.post('/:id/update_quantity', productController.updateQuantity);

// EXPORTING THE ROUTER
module.exports = router;
