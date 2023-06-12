const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();

const authController = require('./app/controllers/authController');
const openaiController = require('./app/controllers/openaiController');

app.use(bodyParser.json());
app.use(cors());

app.post('/login', authController.login);
app.post('/verify', authController.verify);
app.post('/prompt', openaiController.generateOpenAIResponse);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
