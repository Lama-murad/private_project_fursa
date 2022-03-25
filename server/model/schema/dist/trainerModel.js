"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var TrainerSchema = new mongoose.Schema({
    name: String,
    level: Number,
    age: Number,
    description: String,
    image: String
});
//the collection
var Trainer = mongoose.model("Trainer", TrainerSchema);
exports["default"] = Trainer;
