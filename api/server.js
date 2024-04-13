const express = require('express');
const axios = require('axios');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:4000']
}));

app.use(morgan('dev'));

app.get('/', async (req, res) => {
  try {
    const placeId = process.env.PLACE_ID
    const apiKey = process.env.API_KEY

    if(!placeId || !apiKey){
      return res.status(400).json({success: false, message: 'No placeId and or apiKey'});
    }

    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&reviews_no_translations=true&tranlated=false&key=${apiKey}`);



    console.log(response.data.result.reviews)
    const reviews = response.data.result.reviews;

    res.status(200).json({
      success: true,
      data: reviews
    })

  } catch (error) {
    console.log(error)
  }



})


app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));