const express = require('express');
const User = require('../models/user');
const authRouter = express.Router();
const jwt = require('jsonwebtoken');

//CREATE A NEW USER AT SIGNUP
authRouter.post('/signup', (req,res)=>{
    User.findOne({username:req.body.username})
    .populate("users").exec((err, existingUser)=>{
        if(err){ return res.status(500).send({success:false, err})
        if(existingUser !== null){
return res.status(400).send({success:false, err:"Username alreadt exists" })
const newUser = new User(req.body);
newUser.save((err, user)=>{
    if(err) return res.status(500).send({success:false, err})
    const token = jwt.sign(user.toObject(), process.env.SECRET)
    return res.status(201).send({success:true, user: userWithoutPassword(), token});
});
        }}})
});
//LOGIN VALID USER

authRouter.post('/login', (req, res)=>{
    User.findOne({username:req.body.username.toLowerCase()})
    .populate("hotItemsList")
    .exec((err, user)=>{
if(err)return res.status(500).send(err);
if(!user){
    return res.status(403).send({success:false, message:"Invalid username!"})
}
user.checkPassword(req.body.password, (err,match)=>{
    if(err)return res.status(401).send({success:false, message:"Invalid Password!"})
    const token = jwt.sign(user.toObject(), process.env.SECRET, {expiresIn: "24h"});
    return res.status(200).send({token:token, user:user.withoutPassword(), success:true, message:"Welcome Back"})
})
    });
});

module.exports = authRouter;
