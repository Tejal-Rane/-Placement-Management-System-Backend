const mongoose=require('mongoose')
const router=require('express').Router()
const User=require('../models/register')

router.post(`/register`,(req,res)=>{
    console.log(req.body)
    const user=new User(req.body);
    user.save()
        .then(user=>{
            res.status(200).send("user register successfully");
        })
        .catch(err=>{
            res.status(400).send('adding data failed');
        });
})
module.exports=router