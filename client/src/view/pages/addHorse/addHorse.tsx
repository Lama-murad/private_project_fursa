import { Link } from "react-router-dom";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './addHorse.scss';
import { useState, useEffect  } from 'react';
import axios from 'axios';
import AdminHeader from '../../components/adminHeader/adminHeader';

function AddHorse(){
  const [horsess, setHorse] = useState([])

  useEffect(()=>{

    //fetch courses
  fetch('/addHorse/get-all-horses')
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
     
      setHorse(data.horses);
      console.log(horsess);
    }).catch(err=>{
      console.error(err);
    })
  },[])

  function addhorse(ev: any) {
    ev.preventDefault();
    const form = ev.target;
   console.log({form})
    axios.post('/addHorse/add-new-horse', { name: form[0].value, level: form[1].value, description: form[2].value,age:form[3].value,image:form[4].value})
      .then(data => {
        console.log(data);
      }).catch(err => {
        console.error(err);
      })
  }


    return(
        <div className="addOffer">
          <AdminHeader/>
        <h3>add new horse</h3>
            <form className='formAddOffer' onSubmit={addhorse}>
          <input type="text" placeholder='insert offer name' name='horseName' />
          <input type="number" name="level" placeholder='insert horse"s level' />
          <input type="text" name="phone" placeholder='insert horse"s description' />
          <input type="double" name="age" placeholder='insert horse"s age' />
          <input type="text" name="phone" placeholder='insert horse"s image' />
          {/* <button type='submit'>Add</button> */}
          <Button className='addbtn'  type="submit">Add</Button>
        </form>
        {/* <h1>courses</h1> */}
        {horsess.map((t: any) => {
          return <p key={t._id}>{t.name}</p>
        })}

</div>
        
    );

}

export default AddHorse;