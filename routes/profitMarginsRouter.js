const express =  require('express');
const profitMarginsRouter = express.Router();
const ProfitMargins = require('../models/profitMargins.js')

profitMarginsRouter.get("/", (req, res)=>{
    ProfitMargins.find(req.query, (err, profitMargins)=>{
        if(err)return res.status(500).send(err)
        return res.send(profitMargins)
    })
})
module.exports = profitMarginsRouter;