const mongoose  = require("mongoose");
const Schema    = mongoose.Schema;


const ClassSchema  =  new Schema({

    standard: {
        type: String
     },
     division: {
         type: String
     }
},{timestamps: true});

const ClassDetails = mongoose.model('Class',ClassSchema);
module.exports = ClassDetails;