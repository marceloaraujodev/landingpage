const express = require('express');
const axios = require('axios');
require('dotenv').config();
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.use(morgan('dev'));

app.get('/', async (req, res) => {
  const placeId = process.env.PLACE_ID
  const apiKey = process.env.API_KEY

  `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;



})


app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));