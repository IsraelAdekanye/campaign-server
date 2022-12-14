var axios = require('axios');
var qs = require('qs');
require('dotenv').config();

// INITIALIZE TRANSACTION
const initialize = async (request, response) => {
    const { email, firstName, lastName, amount} = request.body
    const donation = amount * 100;

    var data = qs.stringify({
        'email': `${email}`,
        'amount': `${donation}`,
        'currency': 'NGN',
        'reference': `${(Date.now().toString(36) +'-'+ Math.random().toString(36).substring(2)).toUpperCase()}`,
        'callback_url': process.env.ORIGIN,
        'bearer': 'account' 
      });

    var config = {
    method: 'POST',
    url: 'https://api.paystack.co/transaction/initialize',
    headers: { 
        'Content-Type': 'application/x-www-form-urlencoded', 
        'Accept': 'application/json', 
        'Authorization': 'Bearer sk_test_639c6e204c9029f563fab8ec65c261053b90e082'
    },
    data : data
    };

    try {
        await axios(config).then(response0 => {
            if (response0.data.status == true) {
                console.log(response0.data);
                response.status(response0.status).json(response0.data.data.authorization_url);
            }
            else console.log("undefined error")
        })
    } catch (error) {
        response.status(400).json({error: error.message, message: error.response.data.message});
        console.log(error);
    }
}

const plain = async (req, res) => {
    res.status(200).send("NIL")
}
module.exports = {
    initialize, plain
}