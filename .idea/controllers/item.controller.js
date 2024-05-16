const Item = require('../models/item.model');
const Subcategory = require('../models/subcategory.model');

// Create a new item under a specific subcategory
exports.createItem = async (req, res) => {
  try {
    const { subcategoryId } = req.params;
    // Check if the subcategory exists
    const subcategory = await Subcategory.findById(subcategoryId);
    if (!subcategory) return res.status(404).send('Subcategory not found');
    const categoryId = subcategory.categoryId;
    // Create the item under the specified subcategory and category
    const item = new Item({
      ...req.body,
      subcategoryId,
      categoryId
    });
    item.subcategoryId = subcategoryId;
    await item.save();
    res.status(201).send(item);
  } catch (error) {
    res.status(400).send(error);
  }
};


exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};


exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).send('Item not found');
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};


exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).send('Item not found');
    res.status(200).send(item);
  } catch (error) {
    res.status(400).send(error);
  }
};


// Delete item by ID
exports.deleteItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).send('Item not found');
    res.status(200).send({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
};


// Search items by name
exports.searchItemsByName = async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) return res.status(400).send('Query parameter "name" is required');
    const items = await Item.find({ name: { $regex: name, $options: 'i' } });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};
