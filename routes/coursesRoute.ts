const express = require('express');
const router = express.Router();
import { isAdmin, loginStatus } from '../controllers/signInController';
import singleCourses from '../model/schema/singleCourseModel';
import groupCourses from '../model/schema/groupCourseModel';

async function getSingleCourses():Promise<any> {
    try{
     
    const courses = await singleCourses.find({});
    console.log(courses);
    return courses;
    } catch(err:any){
      console.error(err)
      return false;
    }
  }

router.get('/get-all-single-courses',async (req:any, res:any)=>{
    const courses = await getSingleCourses();
    res.send({courses:courses});
  })
  
  router.use(loginStatus)
  router.post("/add-new-single-course", async (req, res) => {
    try {
      const { name, cost, participants,lessons,hours } = req.body;
      if (!name || !cost || !participants || !lessons || !hours) throw new Error("No data");
    
      const newCourse = new singleCourses({
        name: name,
        cost: cost,
        participants: participants,
        lessons:lessons,
        hours:hours,
      });
      await newCourse.save().then((res) => {
        console.log(res);
      });
      res.send({ val: "OK" });
    } catch (err) {
      res.send({ error: err.message });
    }
  });


  async function getGroupCourses():Promise<any> {
    try{
     
    const courses = await groupCourses.find({});
    console.log(courses);
    return courses;
    } catch(err:any){
      console.error(err)
      return false;
    }
  }

router.get('/get-all-group-courses',async (req:any, res:any)=>{
    const courses = await getGroupCourses();
    res.send({courses:courses});
  })
  
  router.use(loginStatus)
  router.post("/add-new-group-course", async (req, res) => {
    try {
      const { name, cost, participants,lessons,hours,time } = req.body;
      if (!name || !cost || !participants || !lessons || !hours || !time) throw new Error("No data");
    
      const newCourse = new groupCourses({
        name: name,
        cost: cost,
        participants: participants,
        lessons:lessons,
        hours:hours,
        time:time,

      });
      await newCourse.save().then((res) => {
        console.log(res);
      });
      res.send({ val: "OK" });
    } catch (err) {
      res.send({ error: err.message });
    }
  });

  
module.exports = router;