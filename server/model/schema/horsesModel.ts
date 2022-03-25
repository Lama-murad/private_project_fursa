const mongoose = require("mongoose");

const HorseSchema = new mongoose.Schema({
    name: String,
    level:Number,
    description:String,
    age:Number,
 image:String
  });

//the collection
const Horses = mongoose.model("Horses", HorseSchema);

export default Horses;
