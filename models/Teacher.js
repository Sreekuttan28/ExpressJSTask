const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    name: {
        type:String
    },
    employeId: {
        type: String
    },
    subject: {
        type: String
    }

},{timestamps: true})

const Teachers = mongoose.model('Teachers',teacherSchema);
module.exports = Teachers;