const mongoose = require ('mongoose');
const {Schema} = mongoose;

const profitMarginsSchema =  new Schema(
    {
        item_num:{
            type:String
        },

        description:{
            type:String
        },
       imageFiles:{
           type:Array
       },
       profitMargin:{
           type:String
       }
        
    }
) 
const ProfitMarginModel = mongoose.model("profitMargins", profitMarginsSchema);

module.exports = ProfitMarginModel;
    
