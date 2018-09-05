const mongoose = require ('mongoose');
const {Schema} = mongoose;

const usedPricesSchema =  new Schema(
    {
        item_num:{
            type:String
        },

        description:{
            type:String
        },
       type:{
           type:String
       },
        price:{
            type: String
        },

        core_deposit:{
            type:String

        },
        location:{
            type: String
        }
    }
) 
const UsedPriceModel = mongoose.model("usedPrice", usedPricesSchema);

module.exports = UsedPriceModel;
    
