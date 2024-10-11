const express=require('express');
const router=express.Router();
const MenuItem=require('../models/MenuItem');
router.post('/',async(req,res)=>{
    try{
        const data=req.body//asuming the request body contains the person data
        //create a new person document using the mongoose model
        const newPerson=new MenuItem(data);
        //save the new person document to the database
       const response= await newPerson.save();

       console.log('data saved');
       res.status(200).json(response);

    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
});
router.get('/',async(req,res)=>{
    try{
        const response=await MenuItem.find();
        console.log("data fetched");
        res.status(200).json(response);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:'internal server error'});

    }
});
module.exports=router;
