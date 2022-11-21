var axios = require('axios');
var qs = require('qs');
require('dotenv').config();
//const { pgPool } = require("../queries/queries");

// INITIALIZE TRANSACTION
const initialize = async (request, res) => {
    const { email, uuid, amount
    } = request.body
    const donation = amount * 100;

    var data = qs.stringify({
        'email': `${email}`,
        'amount': `${donation}`,
        'currency': 'NGN',
        'reference': `${uuid}`,
        'callback_url': process.env.ORIGIN,
        'bearer': 'account' 
      });


    var config = {
    method: 'POST',
    url: 'https://api.paystack.co/transaction/initialize',
    headers: { 
        'Content-Type': 'application/x-www-form-urlencoded', 
        //'Accept': 'application/json', 
        'Authorization': process.env.AUTHORIZATION
    },
    data : data
    };

    await axios(config)
    .then( (response)=> {
    console.log(response.data)
    })
    .catch( (error)=> {
    console.log(error);
    });

}

module.exports = {
    initialize
}