const express = require('express');
const router = express.Router();
import groupCourseRegistrations from '../model/schema/registrationModel';
// import Registrations from '../model/schema/registrationModel';

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
        const {level,name, age,  course } = req.body;
        if (!level || !name || !age || !course) throw new Error("No data");

        const newRegis = new groupCourseRegistrations({
            level: level,
            name: name,
            age: age,
            course: course,
        });
        await newRegis.save().then((res) => {
            console.log(res);
        });
        res.send({ val: "OK" });
    } catch (err) {
        res.send({ error: err.message });
    }
});


module.exports = router;