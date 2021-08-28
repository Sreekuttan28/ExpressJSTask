const mongoose  = require("mongoose");
const Schema    = mongoose.Schema;


const studentSchema  =  new Schema({

    name: {
        type: String
     },
     rolNo: {
         type: String
     },
     phone: {
            type: String
     }

},{timestamps: true});

const Students = mongoose.model('Students',studentSchema);
module.exports = Students;