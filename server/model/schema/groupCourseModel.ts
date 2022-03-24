const mongoose = require("mongoose");

const groupCourseSchema = new mongoose.Schema({
    name: String,
    cost:Number,
    participants:Number,
    hours:Number,
    lessons:Number,
    time:String,
  });

//the collection
const groupCourses = mongoose.model("groupCourses", groupCourseSchema);

export default groupCourses;
