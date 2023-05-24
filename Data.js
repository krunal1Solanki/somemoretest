const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  cartItems: {
    type: Schema.Types.Mixed
  }
});

module.exports = mongoose.model('Cart', cartSchema);
