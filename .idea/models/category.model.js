const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  taxApplicable: { type: Boolean, default: false },
  tax: { type: Number, default: 0 },
  taxType: { type: String },
});

module.exports = mongoose.model('Category', CategorySchema);
