const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  clientid: {
    type: mongoose.ObjectId,
    default: mongoose.Types.ObjectId
  },
  name: {
    type: String,
    required: true,
    index: true
  },
  balance: {
    type: Number,
    required: true,
    default: 0
  },
});

const Client = mongoose.model('Client', clientSchema);
module.exports = Client;