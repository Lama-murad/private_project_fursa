import { Link } from "react-router-dom";
import * as React from 'react';
import './addCourse.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminHeader from '../../components/adminHeader/adminHeader';

function AddGroupCourse() {
  const [courses, setCourses] = useState([])

  useEffect(() => {

    //fetch courses
    fetch('/courses/get-all-group-courses')
      .then(res => res.json())
      .then(data => {
        console.log(1111);
        console.log(data);
        setCourses(data.courses);
        // alert('course added successfully')
      }).catch(err => {
        console.error(err);
      })
  }, [])

  function addGroupCourse(ev: any) {
    ev.preventDefault();
    const form = ev.target;
    console.log({ form })
    axios.post('/courses/add-new-group-course', { name: form[0].value, cost: form[1].value, participants: form[2].value, lessons: form[3].value, hours: form[4].value,time:form[5].value ,level:form[6].value,availableSpaces:form[7].value })
      .then(data => {
        console.log(data);
        alert('course added successfully')
      }).catch(err => {
        console.error(err);
      })
  }


  function handleAdd(ev: any) {
    ev.prevenntDefault();
    console.dir(ev.target);
    const form = ev.target
    console.log(form[0]);
    axios.post('http://localhost:3004/courses', { 'name': form[0].value, 'participants': form[2].value, 'lessons': form[6].value, 'cost': form[2].value,'availableSpaces':form[7].value }).
      then(({ data }) => console.log(data));
    alert("course added successfully");
  }

  return (
    <div className="addCourse">
      <AdminHeader />
<h3> add new group courses</h3>
      {/* <Button className='addbtn' type="submit">Add</Button> */}

      <form onSubmit={addGroupCourse} className='groupCourseForm'>
        <input type="text" placeholder='insert course name' name='courseName' />
        <input type="number" name="cost" placeholder='insert course"s cost' />
        <input type="number" name="participants" placeholder='insert participants number' />
        <input type="number" name="lessons" placeholder=' how many lessons' />
        <input type="double" name="hours" placeholder='how much hours' />
        <input type="text" name="time" placeholder='time' />
        <input type="text" name="level" placeholder='insert 1-3 level' />
        <input type="text" name="availableSpaces" placeholder='insert available spaces' />
        <button type='submit'>Add</button>
      </form>
      <h1>courses</h1>
      {courses.map((course: any) => {
        return <p key={course._id}>{course.name}</p>
      })}

    </div>

  );

}

export default AddGroupCourse;