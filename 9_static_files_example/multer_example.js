const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const multer = require('multer');

dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();

app.listen(process.env.PORT, () => {
  console.log('Server started listening on port', process.env.PORT);
});
