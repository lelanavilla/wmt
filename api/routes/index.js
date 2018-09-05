'use strict';

const priceCtrl = require('../controllers');

module.exports = (app) => {  
    app.use(['/calculate/:usedCost/:soldPrice/:amountDiff', '/year/:makeName/:modelName'], (req, res, next) => {
        const item = req.params.description;
        if (!priceCtrl.priceUrl.hasOwnProperty(item.toLowerCase())) {
            res.status(404)
                    .send({message: `No price info found for ${item}`});
        } else {
            next();
        }
    });

    app.route('/year/:makeName/:modelName/:item')
        .get(priceCtrl.getInfo);

    app.route('/calculate/:usedCost/:soldPrice/:amountDiff')
        .get(priceCtrl.calculateDiff);

    app.use((req, res) => {
        res.status(404)
            .send({url: `sorry friend, but url ${req.originalUrl} is not found`});
    });
}