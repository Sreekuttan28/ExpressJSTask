const { response } = require("express");
const Students = require("../models/Students");

//show the list of students

const index = (req, res, next) => {

    Students.find()
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


//Show one student detail 

const show = (req, res, next) => {
    let studentrol = req.body.studentrol
    Students.findById(studentrol)
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
    const students =new Students({
        name:req.body.name,
        rolNo:req.body.rolNo,
        phone: req.body.phone
    })
    students.save()
    .then(response =>{
        res.json({
            message:'Student Added Sucessfully!'
        })
    })
    .catch( error =>{
        res.json({
            message:'An erorr Occured while inserting! '
        })
    })
}

//udpdate an Student
const update =(req,res,next)=>{
    let studentrol =req.body.studentrol

    let updatedData ={
        name: req.body.name,
        rolNo: req.body.rolNo,
        phone: req.body.phone
    }
    Students.findByIdAndUpdate(studentrol,{$set:updatedData})
    .then(()=>{
        res.json({
            message:'Student updated Successfully! '
        })
    })
    .catch(error=>{
        res.json({
            message: 'An Error Occured while updating!'
        })
    })

}
//delete an Student
const destroy =(req,res,next) =>{
    let studentrol =req.body.studentrol
    Students.findByIdAndRemove(studentrol)
    .then(()=>{
        res.json({
            message:'Student deleted successfully!'
        })
    })
    .catch(error =>{
        req.json({
            message:'An error Occured while deleting! '
        })
    })
}

module.exports ={
    index,show,store,update,destroy
}