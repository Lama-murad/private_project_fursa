const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
    name: String,

    description:String,
    cost:Number,

  });

//the collection
const Offers = mongoose.model("Offer", OfferSchema);

export default Offers;
