const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')

router.get('/all',async(req,res) =>{
    try{
        const movies=await Movie.find()
    res.status(200).send({msg:"get movies successfully",movies})}
    catch(error){
        res.status(500).send({msg:"server error",error})
    }
})
router.post('/new',async(req,res)=>{
    try {
        const {name,URL}=req.body
        const newMovie=new Movie(req.body)
        const findName= await Movie.findOne({name})
        if(findName){
         return   res.status(400).send('movie already exists')
        }
        await newMovie.save()
        res.status(200).send({msg:"movie added",movie:newMovie}) 
    } catch (error) {
        res.status(500).send({msg:"server error",error})
    }

})
router.put('/:id',async(req,res)=>{
    try {
        
        const movie= await Movie.updateOne({_id:req.params.id},{ $set:{...req.body} })
       
        res.status(200).send({msg:"movie updated"}) 
    } catch (error) {
        res.status(400).send({msg:"user not found",error})
    }

})
router.get('/:id',async(req,res)=>{
    try {
        
        const movie= await Movie.findOne({_id:req.params.id})
       
        res.status(200).send(movie) 
    } catch (error) {
        res.status(400).send({msg:"user not found",error})
    }

})
router.delete('/:id',async(req,res)=>{
    try {
        
        const movie= await Movie.deleteOne({_id:req.params.id})
       
        res.status(200).send("deleted") 
    } catch (error) {
        res.status(400).send({msg:"user not found",error})
    }

})


module.exports = router ;