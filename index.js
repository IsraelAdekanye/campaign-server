const express = require("express");
const axios = require('axios');
const transaction = require("./routes/transactionRoute");
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})
app.use(express.json())
app.use(cors({
    origin: '*'
}));

app.use('/transaction', cors(), transaction);


app.listen(process.env.PORT, ()=>{
    console.log(`You have Started Server on PORT ${process.env.PORT}`);
})