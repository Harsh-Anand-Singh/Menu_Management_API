const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');

router.post('/categories', categoryController.createCategory);
router.get('/categories', categoryController.getCategories);
router.get('/categories/:id', categoryController.getCategoryById);
router.put('/categories/:id', categoryController.updateCategory);

module.exports = router;
