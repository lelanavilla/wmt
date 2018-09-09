const mongoose = require('mongoose');

const {Schema} = mongoose;

const hotItemSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    images:{
        type: String,
        reqiured:true
    },
    profitMarginCalc:{
        type:String,
        required:true
    },
    category:{
        type: String
    },
    year:{
        type:String,
        required:true
    },
    make:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    submodel:{
        type:String
    },
    partNotification:{
        type:Boolean,  
    }, 
    hotItemsList:[{
        list:{
            type: Schema.Types.ObjectId,
            ref: "HotItemsList"
    },
        totalHotItems:{
            type: Number,
            default:0
   }
    }],
});

module.exports = mongoose.model("hotItem", hotItemSchema);