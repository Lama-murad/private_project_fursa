"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
// groupCourseRegistrations
var RegistrationSchema = new mongoose.Schema({
    name: String,
    age: Number,
    level: String,
    course: String
});
//the collection
var groupCourseRegistrations = mongoose.model("groupCourseRegistrations", RegistrationSchema);
exports["default"] = groupCourseRegistrations;
