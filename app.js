const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/projet2', { useNewUrlParser: true, useUnifiedTopology: true });
