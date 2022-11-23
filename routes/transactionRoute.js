const express = require("express");
const { initialize, plain } = require("../controllers/transactionController");


const router = express.Router();

router.get('/', plain);

router.post('/initialize', initialize);

module.exports = router;