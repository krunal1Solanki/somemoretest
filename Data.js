const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  cartItems: {
    type : any 
  } 
});

module.exports = mongoose.model('Items', cartSchema);