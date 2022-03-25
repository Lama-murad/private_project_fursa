const express = require('express');
const router = express.Router();
import { isAdmin, loginStatus } from '../controllers/signInController';
import Trainer from '../model/schema/trainerModel';
const trainerController = require('../controllers/trainerController');


router.
route('/trainerByLevel').
post(trainerController.getTrainerByLevel);


async function getTrainer():Promise<any> {
    try{
     
    const trainers = await Trainer.find({});
    console.log(trainers);
    return trainers;
    } catch(err:any){
      console.error(err)
      return false;
    }
  }


router.get('/get-all-trainer',async (req:any, res:any)=>{
    const trainers = await getTrainer();
    res.send({trainers:trainers});
  })

 
 
  router.post("/add-new-trainer", async (req, res) => {
    try {
      const { name, age, level,description,image } = req.body;
      if (!name || !age || !level || !description || !image) throw new Error("No data");
    
      const newHorse = new Trainer({
        name: name,
        age: age,
        level: level,
        description:description,
        image:image,
      });
      await newHorse.save().then((res) => {
        console.log(res);
      });
      res.send({ val: "OK" });
    } catch (err) {
      res.send({ error: err.message });
    }
  });

module.exports = router;