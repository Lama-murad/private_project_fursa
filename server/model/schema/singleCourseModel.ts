const mongoose = require("mongoose");

const singleCourseSchema = new mongoose.Schema({
    name: String,
    cost:Number,
    participants:Number,
    hours:Number,
    lessons:Number,

  });

//the collection
const signleCourses = mongoose.model("signleCourses", singleCourseSchema);

export default signleCourses;
