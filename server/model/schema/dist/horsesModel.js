"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var HorseSchema = new mongoose.Schema({
    name: String,
    level: Number,
    description: String,
    age: Number,
    image: String
});
//the collection
var Horses = mongoose.model("Horses", HorseSchema);
exports["default"] = Horses;
