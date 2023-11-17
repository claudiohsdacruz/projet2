const mongoose = require('mongoose');

const jornauxShemna = new mongoose.Schema({
  IPsource: String,
  type: String,
  time: { type: Date, default: Date.now }
});

const jornaux = mongoose.model('Jornaux', jornauxShemna);

module.exports = jornaux;
