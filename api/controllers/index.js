'use strict';

const svc = require('../services');
const soldPriceUrl = {  
    url:'https://www.ebay.com/sch/6000/i.html?_from=R40&_nkw=used+relay&LH_ItemCondition=4&LH_Sold=1&LH_Complete=1&Brand%2520Type=Genuine%2520OEM&_dcat=6030&_sop=13&_ipg=200'
 };
 const usedCost= {
     src:'priceList.json'
 }
const getPriceInfo = (req, res) => {  
    const make = req.params.makeName;
    svc.usedCost(, usedCost[make.toLowerCase()], (prices) => {
        const price = prices.find(price => {
            return price.itemName.toLowerCase() === req.params.itemName.toLowerCase();
        });
        res.send(price);
    });
}

const calculateDiff = (req, res) => {  
    const soldPrices = req.params.soldPrices;
    svc.soldPrices(soldPrice, priceUrls[soldPrice.toLowerCase()], (soldPrices) => {
        const soldPrices = soldPrices.find(soldPrice => {
            return price.soldPrice.toLowerCase() === req.params.soldPrice.toLowerCase();
        });
        res.send(item.calculateDiff(parseFloat(req.params.amountDiff)));
    });
}




module.exports = {  
    getPriceInfo,
    calculateDiff
}