const {response}= require("express");
const ClassDetails= require("../models/class");


const index = (req, res, next) => {

    ClassDetails.find()
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'An error Occured! '
            })
        })
}



//storing
const store =(req,res,next) =>{
    const classValues =new ClassDetails({
        standard:req.body.standard,
        division:req.body.division,
    
    })
    classValues.save()
    .then(response =>{
        res.json({
            message:'Class details added Sucessfully!'
        })
    })
    .catch( error =>{
        res.json({
            message:'An erorr Occured while inserting! '
        })
    })
}

//udpdate an class
const update =(req,res,next)=>{
    let classId =req.body.classId

    let updatedData ={
        standard: req.body.standard,
        division: req.body.division,
        
    }
    ClassDetails.findByIdAndUpdate(classId,{$set:updatedData})
    .then(()=>{
        res.json({
            message:'class details updated Successfully! '
        })
    })
    .catch(error=>{
        res.json({
            message: 'An Error Occured while updating!'
        })
    })

}
//delete an class
const destroy =(req,res,next) =>{
    let classId =req.body.classId
    ClassDetails.findByIdAndRemove(classId)
    .then(()=>{
        res.json({
            message:`class id ${classId} is deleted successfully!`
        })
    })
    .catch(error =>{
        req.json({
            message:'An error Occured while deleting! '
        })
    })
}

module.exports ={
    index,store,update,destroy
}