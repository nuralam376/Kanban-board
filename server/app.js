const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./db/db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
require('./routes')(app);

app.listen(PORT, console.log(`Server started on port ${PORT}`));
