'use strict'

class priceInfo{  
    constructor( year, makeName, modelName, item, usedPrice, soldPrice) {
        this.year= year;
        this.makeName = makeName;
        this.modelName = modelName;
        this.item = item;
        this.usedPrice = usedPrice;
        this.soldPrice = soldPrice;
    }

    calculatePrice () {
        const usedPrice = this.usedPrice;
        const soldPrice = this.soldPrice;
        const amountDiff = usedPrice - soldPrice;
        const profitPercentage = (diff / soldPrice) * 100
        return {
            usedPrice,
            soldPrice,
            amountDiff,
            profitPercentage
        };
    }
}

module.exports = priceInfo;  