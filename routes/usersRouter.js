const express = require('express');
const expressJwt = require('express-jwt');
const usersRouter = express.Router();
const User = require('../models/user');

const auth = expressJwt({secret:process.env.SECRET});

usersRouter.use(auth);

usersRouter.get('verify',(req,res)=>{
    User.findOne({_id: req.uswer._id})
    .populate('hotItem')
    .exec((err, user)=>{
        if(err) return res.status(500).send(err);
        if(!user) return res.status(403).send({message:"User does not exist!"});
        res.status(200).send(user);
    })

})
 usersRouter.get('/', (req,res)=>{
     User.find(req.query, (err, users)=>{
         return res.send(users);
     });
 });

 //GET USERS ACCOUNT DETAILS for a USER

 usersRouter.get("/hotItem/:hotItemId", (req, res)=>{
     User.find({hotItem: req.params.hotItemId}, (err,user)=>{
         if(err) return res.status(500).send(err);
         return res.send(user);
     })
 })

 //GET A USER NOT ASSOCIATED WITH a saved list


 //EDIT A USER

 user.Router.put('/:userId', (req,res)=>{
     User.findOneAndUpdate({_id: req.params.userId},
    req.body,
{new:true},
(err, user)=>{
    if(err) return res.status(500).send(err);
    return res.send(user);

}
);
 });

 //DELETE A USER
 userRouter.delete('/:userId', (req,res)=>{
     User.findOneAndRemove({_id: req.params.userId}, (err,user)=>{
        if(err) return res.status(500).send({success:false, err:"Internal Server Error"});
    if(user === null) return res.status(400).send({success: false, err:"User not found!"}) 
//DELETE USER FROM ACCOUNTS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 TE USER FROM ALL USERS SAVED LISTS   
return res.send(user);
});
 });

 module.exports = usersRouter;``