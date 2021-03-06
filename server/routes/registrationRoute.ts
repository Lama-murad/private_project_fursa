const express = require('express');
const router = express.Router();
import groupCourseRegistrations from '../model/schema/registrationModel';
import singleRegistrations from '../model/schema/singleCourseRegModel';
import groupCourses from '../model/schema/groupCourseModel';



async function getRegistrations(): Promise<any> {
    try {

        const registrations = await groupCourseRegistrations.find({});
        console.log(registrations);
        return registrations;
    } catch (err: any) {
        console.error(err)
        return false;
    }
}

router.get('/get-all-registrations', async (req: any, res: any) => {
    const registrations = await getRegistrations();
    res.send({ registrations: registrations });
})

router.post("/add-new-registration", async (req, res) => {
    try {
        const {level,name, age,  course,courseTime } = req.body;
        if (!level || !name || !age || !course || !courseTime) throw new Error("No data");
        const courseName = await groupCourses.find({"name":course});
        console.log(courseName,"aaaaaaaaaaa")
        if (courseName) {
            console.log
            const filter={name:courseName[0].name};
            const updatedAvailable=(courseName[0].availableSpaces)-1;
            console.log(updatedAvailable,"aavailableeeeeeeeee");
            const update={availableSpaces:updatedAvailable};
            console.log(update,"updateee")
           
        groupCourses.findOneAndUpdate(filter, update);
        const newRegis = new groupCourseRegistrations({
            level: level,
            name: name,
            age: age,
            course: course,
            courseTime:courseTime,
        });
        await newRegis.save().then((res) => {
            console.log(res);
        });
        res.send({ val: "OK" });
    }} catch (err) {
        res.send({ error: err.message });
    }
});


router.post("/add-new-single-registration", async (req, res) => {
    try {
        console.log("fat 3la add new 46")
        const {level,name, age,  date,horse,trainer } = req.body;
        if (!level || !name || !age || !date || !horse || !trainer) throw new Error("No data");
        const newRegis = new singleRegistrations({
            level: level,
            name: name,
            age: age,
            date:date,
            horse:horse,
            trainer:trainer,
        });
        await newRegis.save().then((res) => {
            console.log("yessssssssss")
            console.log(res);
        });
        res.send({ val: "OK" });
    } catch (err) {
        res.send({ error: err.message });
    }
});


module.exports = router;