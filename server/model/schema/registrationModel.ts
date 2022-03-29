const mongoose = require("mongoose");
// groupCourseRegistrations
const RegistrationSchema = new mongoose.Schema({

    name:String,
    age:Number,
    level:String,
    course: String,
    courseTime:String,
  });

//the collection
const groupCourseRegistrations = mongoose.model("groupCourseRegistrations", RegistrationSchema);

export default groupCourseRegistrations;

