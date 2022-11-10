const express = require("express");
const axios = require('axios');
require('dotenv').config();

const app = express();

const config = {
  method: 'get',
  url: 'https://api.paystack.co/transaction',
  headers: { 
    'Accept': 'application/json', 
    'Authorization': `Bearer ${process.env.SECRET_KEY}`
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

app.listen(process.env.PORT, ()=>{
    console.log(`You have Started Server on PORT ${process.env.PORT}`);
})