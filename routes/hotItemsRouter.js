const express = require('express');
const hotItemsRouter = express.Router();
const HotItem = require('../models/hotItem');
const User = require('../models/user');

//GET HotItem ASSOCIATED WITH A SPECIFIC USER
hotItemsRouter.get('/:userId/users', (req,res)=>{
    HotItem.find({userId: req.params.userId}, (err, hotItem)=>{
        if(err) return res.status(500).send(err);
        return res.send(hotItem);
    });
});
// CREATE A NEW HotItem PART
hotItemsRouter.post('/', (req,res)=>{
    const hotItem = new HotItem(req.body);
    hotItem.save(function (err, newHotItem){
        if(err) return res.status(500).send(err);
        User.findByIdAndUpdate(req.user._id, {$push: {hotItem : newHotItem._id}}, {new:true}, (err, updatedUser)=>{
            if(err) return res.status(500).send(err);
            return res.status(201).send(newHotItem);
        })
    });
});

//GET ONE HotItem ITEM

hotItemsRouter.get('/:hotItemId', (req,res)=>{
    HotItem.findOne({_id: req.params.hotItemId}, (err, hotItem)=>{
        if(err) return res.status(500).send(err);
        if(!hotItem) return res.status(404).send("Item not found!");
        return res.send(hotItem);
    });
});

//EDIT MAIN HotItem LIST

hotItemsRouter.put('/:hotItemId', (req,res)=>{
    HotItem.findOneAndUpdate({ _id: req.params.hotItemId},
    req.body,
{new:true},
(err, hotItem)=>{
    if(err) return res.status(500).send(err);
    return res.send(hotItem);

});
});

//DELETE ONE HotItem ITEM
hotItemsRouter.delete('/:hotItemId', (req,res)=>{
    HotItem.findOneAndRemove({_id: req.params.hotItemId}, (err, HotItem)=>{
        if(err) return res.status(500).send(err);
        return res.send(hotItem);
    });
});

module.exports = hotItemsRouter;