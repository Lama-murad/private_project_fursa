"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var OfferSchema = new mongoose.Schema({
    name: String,
    description: String,
    cost: Number
});
//the collection
var Offers = mongoose.model("Offer", OfferSchema);
exports["default"] = Offers;
