const express=require('express');
const router=express.Router();
const person=require('../models/person');
router.post('/',async(req,res)=>{
    try{
        const data=req.body//asuming the request body contains the person data
        //create a new person document using the mongoose model
        const newPerson=new person(data);
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
})
router.get('/',async(req,res)=>{
    try{
        const response=await person.find();
        console.log("data fetched");
        res.status(200).json(response);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:'internal server error'});

    }
})

router.get('//:worktype', async(req,res)=>{
    try{
        const worktype=req.params.worktype;
        if(worktype=='chef' || worktype=='manager' || worktype=='waiter')
        {
            const response=await person.find({occupation:worktype});
            console.log("data fetched");
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error:'work type not found'});
        }

    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})
router.put('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;
        const updatedPersonData=req.body;
        const response=await person.findByIdAndUpdate(personId,updatedPersonData,{

           new:true,
            runValidators:true,
})
if(!response)
{
    res.status(404).json({error:'person not found'});
}
       console.log('data updated');
         res.status(200).json(response);


    }
    catch (err)
    {
         console.log(err);
         res.status(500).json({error:"internal server error"});
    }
})
module.exports=router;