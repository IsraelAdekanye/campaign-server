var axios = require('axios');
var qs = require('qs');
require('dotenv').config();
//const { pgPool } = require("../queries/queries");

// INITIATE TRANSACTION
const initialize = async (req, res) => {
    const { firstName, lastName, email, phoneNumber, gender, uuid, amount
    } = req.body
    let donation = amount * 100;

    var data = qs.stringify({
        'email': email,
        'amount': donation,
        'currency': 'NGN',
        'reference': uuid,
        'callback_url': process.env.ORIGIN,
        'bearer': 'account' 
      });

}


module.exports = {
    initialize
}