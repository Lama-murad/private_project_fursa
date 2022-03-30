const express = require('express');
const router = express.Router();
import { isAdmin, loginStatus } from '../controllers/signInController';
import singleCourses from '../model/schema/singleCourseModel';
import groupCourses from '../model/schema/groupCourseModel';
import singleRegistrations from '../model/schema/singleCourseRegModel';
import groupCourseRegistrations from '../model/schema/registrationModel';

async function getSingleCourses():Promise<any> {
    try{
     
    const singleCourses = await singleRegistrations.find({});
    console.log(singleCourses);
    return singleCourses;
    } catch(err:any){
      console.error(err)
      return false;
    }
  }

  router.post("/get-course-by-level", async (req, res) => {
    try {
      const {level} = req.body;
      // console.log("hooooon")
      if (!level ) throw new Error("No data");
      const courses = await groupCourses.find({"level":level});
      if(courses){
        res.send({"log":true,"courses":courses})
        // console.log(courses)
    }
    else{
        res.send({"log":false})
        console.log("falsee")
    }
}catch(err){
    res.send({err});
}
  });

  router.post("/get-all-my-Gcourses", async (req, res) => {
    try {
      const emailname ="lama@gmail.com";
      // console.log(emailname,"aaaaaaaa")
      if (!emailname ) throw new Error("No data");
      const courses = await groupCourseRegistrations.find({"name":{emailname}});
      if(courses){
        res.send({"log":true,"courses":courses})
        console.log(courses)
    }
    else{
        res.send({"log":false})
        console.log("falsee")
    }
}catch(err){
    res.send({err});
}
  });

  router.post("/get-all-my-Scourses", async (req, res) => {
    try {
      const {emailname} = req.body;
      console.log(emailname)
      console.log("hooooon")
      if (!emailname ) throw new Error("No data");
      const courses = await singleRegistrations.find({"name":emailname});
      if(courses){
        res.send({"log":true,"courses":courses})
        console.log(courses)
    }
    else{
        res.send({"log":false})
        console.log("falsee")
    }
}catch(err){
    res.send({err});
}
  });


router.get('/get-all-single-courses',async (req:any, res:any)=>{
    const singleCourses = await getSingleCourses();
    // console.log("")
    res.send({singleCourses:singleCourses});
  })
  
  router.use(loginStatus)
  router.post("/add-new-single-course", async (req, res) => {
    try {
      const { name, cost, participants,lessons,hours } = req.body;
      if (!name || !cost || !participants || !lessons || !hours) throw new Error("No data");
      const courseName = await groupCourses.find({"name":name});
      if(!courseName){
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
      res.send({ val: "OK" });}
      else{
        res.send({"course name exists":false})
      }
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


  async function getGroupCoursesReg():Promise<any> {
    try{
     
    const groupCoursesReg = await groupCourseRegistrations.find({});
    console.log(groupCoursesReg);
    return groupCoursesReg;
    } catch(err:any){
      console.error(err)
      return false;
    }
  }

router.get('/get-all-group-courses-reg',async (req:any, res:any)=>{
    const groupCoursesReg = await getGroupCoursesReg();
    res.send({groupCoursesReg:groupCoursesReg});
  })

  async function getSingleCoursesReg():Promise<any> {
    try{
     
    const signleCoursesReg = await singleRegistrations.find({});
    console.log(signleCoursesReg);
    return signleCoursesReg;
    } catch(err:any){
      console.error(err)
      return false;
    }
  }

router.get('/get-all-single-courses-reg',async (req:any, res:any)=>{
    const signleCoursesReg = await getSingleCoursesReg();
    res.send({signleCoursesReg:signleCoursesReg});
  })

  
  router.post("/add-new-group-course", async (req, res) => {
    try {
      const { name, cost, participants,lessons,hours,time,level,availableSpaces } = req.body;
      if (!name || !cost || !participants || !lessons || !hours || !time || !level || !availableSpaces) throw new Error("No data");
    
      const newCourse = new groupCourses({
        name: name,
        cost: cost,
        participants: participants,
        lessons:lessons,
        hours:hours,
        time:time,
        level:level,
        availableSpaces:participants,

      });
      await newCourse.save().then((res) => {
        console.log(res);
      });
      res.send({ val: "OK" });
    } catch (err) {
      res.send({ error: err.message });
    }
  });

  router.post("/delete-course", async (req, res) => {
    try {
      const { name } = req.body;
      const filter = { name: name };
  
      //delet on  DB
      let doc = await groupCourses.deleteOne(filter);
  
      res.send({ ok: true, doc });
    } catch (err) {
      console.error(err);
      res.status(400).send({ error: err.message });
    }
  });

  
module.exports = router;