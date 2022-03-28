"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var groupCourseSchema = new mongoose.Schema({
    name: String,
    cost: Number,
    participants: Number,
    hours: Number,
    lessons: Number,
    time: String,
    level: String,
    availableSpaces: Number
});
//the collection
var groupCourses = mongoose.model("groupCourses", groupCourseSchema);
exports["default"] = groupCourses;
