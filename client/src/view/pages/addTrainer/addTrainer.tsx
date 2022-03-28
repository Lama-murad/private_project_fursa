import { Link } from "react-router-dom";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './addTrainer.scss';
import { useState, useEffect  } from 'react';
import axios from 'axios';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AdminHeader from '../../components/adminHeader/adminHeader';

function AddTrainer(){
  const [trainer, setTrainer] = useState([])

  useEffect(()=>{

    //fetch courses
  fetch('/trainer/get-all-trainer')
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setTrainer(data.trainers);
    }).catch(err=>{
      console.error(err);
    })
  },[])

  function handleDelete(event:any){
    event.preventDefault();
    const id=event.target.value;
    axios.delete(`http://localhost:3004/courses/${id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

  function addTrainer(ev: any) {
    ev.preventDefault();
    const form = ev.target;
   console.log({form})
    axios.post('/trainer/add-new-trainer', {name: form[0].value, level: form[1].value, description: form[2].value,age:form[3].value,image:form[4].value})
      .then(data => {
        console.log(data);
      }).catch(err => {
        console.error(err);
      })
  }


    return(
        <div className="addOffer">
             <AdminHeader/>
        <h3>add new trainer</h3>
            <form className='formAddOffer' onSubmit={addTrainer}>
          <input type="text" placeholder='insert trainer"s name' name='trainerName' />
          <input type="number" name="level" placeholder='insert trainer"s level' />
          <input type="text" name="phone" placeholder='insert trainer"s description' />
          <input type="double" name="age" placeholder='insert trainer"s age' />
          <input type="text" name="phone" placeholder='insert trainers"s image' />
          <Button className='addbtn'  type="submit">Add</Button>
        </form>
        {/* <h1>courses</h1> */}
        {/* {trainer.map((t: any) => {
          return <p key={t._id}>{t.name}</p>
        })} */}


<div className='tablediv1'>
     <table className="table table-striped">
                <thead>
                    <tr>
                    {/* <th>Id</th> */}
                    <th>Name</th>
                    <th>age</th>
                    <th>level</th>
                    <th>description</th>
                    {/* <th>image</th> */}
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                 
              {trainer.map((info:any,index)=>{
              return(
                  <tr key={index}>
                      {/* <td>{info.id}</td> */}
                      <td>{info.name}</td>
                      <td>{info.age}</td>
                      <td>{info.level}</td>
                      <td>{info.description}</td>
                      <td>
     
    <DeleteOutlinedIcon onClick={handleDelete}/>
                        </td>
                  </tr>
              )
          }
          
      )}
                    
                </tbody>
            </table>
     </div>

</div>
        
    );

}

export default AddTrainer;