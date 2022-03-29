import { useEffect } from 'react';
import axios from 'axios';
import logo from '../../../logo.svg';
import './data.scss';
import { useState } from "react";
import JsonData from '../../../../db.json';
// import 'db.json';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonGroup from '@mui/material/ButtonGroup';
import AdminHeader from '../../components/adminHeader/adminHeader';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';


interface courseProp {
  courseid: number,
  userid: number,
  username: string,
}
function Data() {
  const [details, setDetails] = useState<Array<any>>([{ courseid: 0, coursaname: "", userid: 0, username: "" }]);
  const [groupcourses, setGroupCourses] = useState<Array<any>>([{ name: "", age: 0, level: "", course:""}])
  const [singlecourses, setSingleCourses] = useState<Array<any>>([{ level: "",name: "", age: 0,  date:"",horse:"",trainer:""}])


  function handleDelete(ev: any) {
    // ev.prevenntDefault();
    // console.dir(ev.target);

    // axios.delete('http://localhost:3004/participants/').then(({data})=>console.log(data));

  }
  useEffect(() => {
    fetch('/courses/get-all-group-courses-reg')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setGroupCourses(data.groupCoursesReg);
    }).catch(err => {
      console.error(err);
    })

    fetch('/courses/get-all-single-courses-reg')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setSingleCourses(data.signleCoursesReg);
    }).catch(err => {
      console.error(err);
    })
  }, []);

  return (

    <div className='dataDiv'>
      <AdminHeader />

      <h4>participants in courses management</h4>
      <h5>group courses</h5>
      <div className='tablediv'>
        <table className="table table-striped">
          <thead>
            <tr>
 
              <th>Name</th>
              <th>age</th>
              <th>level</th>
              <th>course</th>
           <th>Delete</th>
            </tr>
          </thead>
          <tbody>

            {groupcourses.map((info, index) => {
              return (
                <tr key={index}>
                  {/* <td>{info.id}</td> */}
         
                  <td>{info.name}</td>
                  <td>{info.age}</td>
                  <td>{info.level}</td>
                  <td>{info.course}</td>
                  <td>

                    <DeleteOutlinedIcon onClick={handleDelete} />
                  </td>
                </tr>
              )
            }

            )}

          </tbody>
        </table>
      </div>

      <h5>single courses</h5>
      <div className='tablediv'>
        <table className="table table-striped">
          <thead>
            <tr>
            <th>level</th>
              <th>Name</th>
              <th>age</th>
              <th>date</th>
              <th>horse</th>
              <th>trainer</th>
           <th>Delete</th>
            </tr>
          </thead>
          <tbody>

            {singlecourses.map((info, index) => {
              return (
                <tr key={index}>
                  <td>{info.level}</td>
                  <td>{info.name}</td>
                  <td>{info.age}</td>
                  <td>{info.date}</td>
                  <td>{info.horse}</td>
                  <td>{info.trainer}</td>
                  <td>

                    <DeleteOutlinedIcon onClick={handleDelete} />
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

export default Data;
