import express from 'express';
import morgan from 'morgan';
import got from 'got';
import * as dotenv from 'dotenv';
import cors from cors;

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8081;
const thirdPartyBaseUrl = 'http://api.weatherbit.io/v2.0/current';
const thirdPartyApiKey = process.env.WEATHER_API_KEY;

app.use(morgan('tiny')); // morgan middleware (for logs)
app.use(cors());

app.get('/api/weather', async (req, res) => {
  try {
    // req.query
    // req.params  ways to pass data in a request
    // req.body
    // req.headers
    const { latitude, longitude } = req.query;

    if (!latitude) {
      return res
        .status(400)
        .json({ message: 'latitude parameter is mandatory' });
    }

    if (!longitude) {
      return res
        .status(400)
        .json({ message: 'longitude parameter is mandatory' });
    }

    const response = await got(thirdPartyBaseUrl, {
      searchParams: {
        key: thirdPartyApiKey,
        lat: latitude,
        lon: longitude,
      },
      responseType: 'json',
    });
    const [weatherData] = response.body.data;
    const {
      city_name,
      weather: { description },
      temp,
    } = weatherData;
    res.json({
      city_name,
      description,
      temp,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, (err) => {
  if (err) {
    console.log('Error at server launch', err);
  }
  console.log(`Server work at PORT ${PORT}!`);
});
