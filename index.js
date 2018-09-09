const express = require ('express');
require('dotenv').config();
const morgan = require('morgan');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
const expressJwt = require('express-jwt');
const usedPrices = require('./routes/usedPricesRouter.js');
const profitMargins = require('./routes/profitMarginsRouter.js');



const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api', expressJwt({secret:process.env.SECRET}));
app.use("/usedPrices", require('./routes/usedPricesRouter.js'));
app.use("/auth", require('./routes/authRouter.js'))

const db = process.env.MONGODB_URL || "mongodb://localhost/usedPricesList";
mongoose.Promise = global.Promise;
mongoose.connect(db, (err)=>{
    if (err) throw err;
    console.log("You are Connected to the Database");
});

app.listen(PORT, () => console.log("Server running on PORT:" + PORT));

//  mongoose.connect('mongodb://localhost:27017/priceList', (err)=>{
//      if (err) c
//  })






































