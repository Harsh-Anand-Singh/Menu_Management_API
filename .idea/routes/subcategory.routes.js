const express = require('express');
const router = express.Router();
const subcategoryController = require('../controllers/subcategory.controller');

router.post('/categories/:categoryId/subcategories', subcategoryController.createSubcategory);
router.get('/subcategories', subcategoryController.getSubcategories);
router.get('/subcategories/:id', subcategoryController.getSubcategoryById);
router.put('/subcategories/:id', subcategoryController.updateSubcategory);

module.exports = router;
