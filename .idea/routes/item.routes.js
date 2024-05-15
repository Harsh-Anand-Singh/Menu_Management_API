const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item.controller');

router.post('/subcategories/:subcategoryId/items', itemController.createItem);
router.get('/items', itemController.getItems);
router.get('/items/:id', itemController.getItemById);
router.put('/items/:id', itemController.updateItem);

module.exports = router;
