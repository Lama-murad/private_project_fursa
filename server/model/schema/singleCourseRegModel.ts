const mongoose = require("mongoose");

const singleCourseRegistrationSchema = new mongoose.Schema({
    level: String,
    name: String,
    age: Number,
    date: Date,
    horse: String,
    trainer: String,
});

//the collection
const singleRegistrations = mongoose.model("singleRegistrations", singleCourseRegistrationSchema);

export default singleRegistrations;
