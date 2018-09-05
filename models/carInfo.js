const mongoose = require('mongoose');
const {Schema} = mongoose;

const carInfoSchema = new Schema(
        [{
                year: Array,
                makeName: Array,
                modelName: Array,
                description: String,
                usedPrice: Number,
                soldPrice: Number
        }]
   
    )
    const CarInfoModel = mongoose.model("carInfo", carInfoSchema);

    module.exports= CarInfoModel