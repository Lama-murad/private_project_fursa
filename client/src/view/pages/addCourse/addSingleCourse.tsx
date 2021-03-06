import { Link } from "react-router-dom";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './addCourse.scss';
import { useState, useEffect  } from 'react';
import axios from 'axios';

function AddSingleCourse(){
  const [singleCourses, setSingleCourses] = useState([])

  useEffect(()=>{

    //fetch courses
  fetch('/courses/get-all--single-courses')
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setSingleCourses(data.courses);
    }).catch(err=>{
      console.error(err);
    })
  },[])

  function addSingleCourse(ev: any) {
    ev.preventDefault();
    const form = ev.target;
   console.log({form})
    axios.post('/courses/add-new-single-course', { name: form[0].value, cost: form[1].value, participants: form[2].value,lessons:form[3].value,hours:form[4].value})
      .then(data => {
        console.log(data);
        console.log(data);
      }).catch(err => {
        console.error(err);
      })
  }


    function handleAdd(ev:any){
      ev.prevenntDefault();
      console.dir(ev.target);
      const form=ev.target
      console.log(form[0]);
        axios.post('http://localhost:3004/courses',{'name':form[0].value, 'participants':form[2].value,'lessons':form[6].value,'cost':form[2].value}).
        then(({data})=>console.log(data));
alert("course added successfully");
    }

    return(
        <div className="addCourse">
     <h3> add new single lessons</h3>
                  <Button className='addbtn'  type="submit">Add</Button>
                  {/* </Link> */}
{/* 
            </form> */} 


            <form onSubmit={addSingleCourse}>
          <input type="text" placeholder='insert course name' name='courseName' />
          <input type="number" name="cost" placeholder='insert course"s cost' />
          <input type="number" name="participants" placeholder='insert participants number' />
          <input type="number" name="lessons" placeholder=' how many lessons' />
          <input type="double" name="hours" placeholder='how much hours' />
          <button type='submit'>Add</button>
        </form>
        <h1>single lesson</h1>
        {singleCourses.map((course: any) => {
          return <p key={course._id}>{course.name}</p>
        })}

</div>
        
    );

}

export default AddSingleCourse;