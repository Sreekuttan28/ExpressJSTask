const {response}= require('express');
const Teachers =require('../models/Teacher');


//show the list of Teacher

const index = (req, res, next) => {

    Teachers.find()
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
    const teachers =new Teachers({
        name      :req.body.name,
        employeId :req.body.employeId,
        subject   :req.body.subject
    })
    teachers.save()
    .then(response =>{
        res.json({
            message:'Teachers details added Sucessfully!'
        })
    })
    .catch( error =>{
        res.json({
            message:'An erorr Occured while inserting! '
        })
    })
}

//udpdate an Teacher
const update =(req,res,next)=>{
    let teacherId =req.body.teacherId

    let updatedData ={
        name: req.body.name,
        employeId: req.body.employeId,
        subject: req.body.subject
    }
    Teachers.findByIdAndUpdate(teacherId,{$set:updatedData})
    .then(()=>{
        res.json({
            message:'Teacher details updated Successfully! '
        })
    })
    .catch(error=>{
        res.json({
            message: 'An Error Occured while updating!'
        })
    })

}
//delete an teacher
const destroy =(req,res,next) =>{
    let teacherId =req.body.teacherId
    Teachers.findByIdAndRemove(teacherId)
    .then(()=>{
        res.json({
            message:`Teacher id ${teacherId} is deleted successfully!`
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