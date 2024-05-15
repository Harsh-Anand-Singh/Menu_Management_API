const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  taxApplicable: { type: Boolean, default: false },
  tax: { type: Number, default: 0 },
  baseAmount: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  totalAmount: { type: Number, required: true },
  subcategoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory' },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
});

ItemSchema.pre('save', function(next) {
  this.totalAmount = this.baseAmount - this.discount;
  next();
});

module.exports = mongoose.model('Item', ItemSchema);
