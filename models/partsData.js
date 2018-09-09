const mongoose = require('mongoose');
const {Schema} = mongoose;

const partsDataSchema = new Schema(
        [{
            part:{
             part_name: String,
             required: Boolean
            },
            description: String,
            markings: Array,
            lastSoldDate: String,
            maxPrice:{
              currency: String,
              value:Number,
              required: Boolean
                 },
            usedPartPrice:{
                usedPartName: String,
                usedPartCatergory:String,
                cost: Number,
                required: Boolean
            },
            partUrl:String,
            imgUrls: String,
            profitMargin:{
                percentage: Number,
                required:Boolean
                 },
                 isHotItem:Boolean
                }]);
        
        
        
    const PartsDataModel = mongoose.model("partsData", partsDataSchema);

    module.exports= PartsDataModel