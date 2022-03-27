"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var singleCourseRegistrationSchema = new mongoose.Schema({
    level: String,
    name: String,
    age: Number,
    date: String,
    horse: String,
    trainer: String
});
//the collection
var singleRegistrations = mongoose.model("singleRegistrations", singleCourseRegistrationSchema);
exports["default"] = singleRegistrations;
