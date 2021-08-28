const express = require('express');
const  trouter = express.Router();


const TeacherController       =    require('../controller/teacherController');

trouter.get('/',TeacherController.index);
trouter.post('/',TeacherController.store);
trouter.put('/',TeacherController.update);
trouter.delete('/',TeacherController.destroy);

module.exports = trouter;