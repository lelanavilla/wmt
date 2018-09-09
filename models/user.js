const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const {Schema} = mongoose;

const userSchema = new Schema({
    name:{
        type: String,
    },
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase: true
    },
    password:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    hotItems:[{
        type:Schema.Types.ObjectId,
        ref: "HotItem"
    }],
    isAdmin:{
        type:Boolean,
        default:false
    }

});

userSchema.pre("save", function(next){
    const user = this;
    if(!user.isModified("password")) return next();
    bcrypt.hash(user.password, 10, (err, hash)=>{
        if(err) return next(err);
        user.password= hash;
        next();
    });
});

userSchema.methods.checkPassword = function (passwordAttempt, callback){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch)=>{
        if(err) return callback(err);
        callback(null, isMatch);
    })
}

userSchema.methods.withoutPassword = function() {
const user = this.toObject();
delete traveler.password;
return user;
}

module.exports = mongoose.model('User', userSchema);