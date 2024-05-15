const Subcategory = require('../models/subcategory.model');
const Category = require('../models/category.model');

//Below blocks of code handles the operations for the Subcategory model


exports.createSubcategory = async (req, res) => {
  try {
    // Get the categoryId and Check if the category exists
    const { categoryId } = req.params;
    const category = await Category.findById(categoryId);
    if (!category) return res.status(404).send('Category not found');

    const subcategory = new Subcategory(req.body);
    // Create the subcategory under the specified category
    subcategory.categoryId = categoryId;
    await subcategory.save();
    res.status(201).send(subcategory);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getSubcategories = async (req, res) => {
  try {
    const subcategories = await Subcategory.find();
    res.status(200).send(subcategories);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getSubcategoriesByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const subcategories = await Subcategory.find({ categoryId });
    res.status(200).send(subcategories);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getSubcategoryById = async (req, res) => {
  try {
    const subcategory = await Subcategory.findById(req.params.id);
    if (!subcategory) return res.status(404).send('Subcategory not found');
    res.status(200).send(subcategory);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateSubcategory = async (req, res) => {
  try {
    const subcategory = await Subcategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!subcategory) return res.status(404).send('Subcategory not found');
    res.status(200).send(subcategory);
  } catch (error) {
    res.status(400).send(error);
  }
};