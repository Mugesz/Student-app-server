const mongoose = require("mongoose");
const StudentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  fathers: { 
    type: String,
    required: true,
  },
  mothers: {  
    type: String,
    required: true,
  },
  class: {  
    type: String,
    required: true,
  },
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const detailsmodel = mongoose.model("Student", StudentSchema);
module.exports = detailsmodel;


