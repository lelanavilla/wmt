const express = require('express');
const usedPricesRouter = express.Router();
const Price = require("../models/usedPrices.js");

usedPricesRouter.get('/', (req, res)=>{
    Price.find(req.query, (err, usedPrices)=>{
        if(err)return res.status(500).send(err);
        return res.send(usedPrices);
    });
});

module.exports = usedPricesRouter;