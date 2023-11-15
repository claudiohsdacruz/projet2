const mongoose = require('mongoose');

const accessLogSchema = new mongoose.Schema({
  endpoint: String,
  method: String,
  timestamp: { type: Date, default: Date.now }
});

const AccessLog = mongoose.model('AccessLog', accessLogSchema);

module.exports = AccessLog;
