const express = require('express');
const classroute= express.Router();


const ClassController = require('../controller/classController');


classroute.get('/',ClassController.index);
classroute.post('/',ClassController.store);
classroute.put('/',ClassController.update);
classroute.delete('/',ClassController.destroy);



module.exports = classroute