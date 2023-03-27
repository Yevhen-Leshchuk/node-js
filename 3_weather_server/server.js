const express = require('express');

const PORT = 3000;
const app = express();

app.get('/weather', (req, res, next) => {
  // 1. validate req params +
  // 2. register account on OpenWeather API +
  // 3. add .env file with env vars +
  // 4. send request to OpenWeatherMap +
  // 5. send response to client +
  // 6. deploy application to Heroku
});

app.listen(PORT, () => {
  console.log('server started listening on port', PORT);
});
