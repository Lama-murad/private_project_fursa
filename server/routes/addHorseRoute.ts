const express = require('express');
const router = express.Router();
import { isAdmin, loginStatus } from '../controllers/signInController';
import Horses from '../model/schema/horsesModel';


async function getHorses():Promise<any> {
    try{
     
    const horses = await Horses.find({});
    console.log(horses);
    return horses;
    } catch(err:any){
      console.error(err)
      return false;
    }
  }


router.get('/get-all-horses',async (req:any, res:any)=>{
    const horses = await getHorses();
    res.send({horses:horses});
  })


  

 
 
  router.post("/add-new-horse", async (req, res) => {
    try {
      const { name, age, level,description,image } = req.body;
      if (!name || !age || !level || !description || !image) throw new Error("No data");
    
      const newHorse = new Horses({
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