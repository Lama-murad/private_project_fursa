import {useEffect} from 'react';
import axios from 'axios';
import logo from '../../../logo.svg';
import './admincourses.scss';
import { useState } from "react";
import JsonData from '../../../../db.json';
// import 'db.json';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonGroup from '@mui/material/ButtonGroup';
import AdminHeader from '../../components/adminHeader/adminHeader';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
// import AddGroupCourse from '../addCourse/addGroupCourse';
// import AddSingleCourse from '../addCourse/addSingleCourse';

// interface courses {
//   id: number;
//   name:string;
//   participants: number;
//   lessons:number;
//hours:number
//   cost:number;
// }

function AdminCourses() {
  const [groupcourses, setGroupCourses] = useState<Array<any>>([{name:"", participants:0,lessons:0,hours:0,cost:0,time:""}])
  const [details, setDetails] = useState<Array<any>>([{id: 0, name:"", participants:0,lessons:0,cost:0}]);
  const [singlecourses, setSingleCourses] = useState<Array<any>>([{name:"", participants:0,lessons:0,hours:0,cost:0}])

useEffect(()=>{
  //fetch courses using mongo
fetch('/courses/get-all-single-courses')
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    setSingleCourses(data.courses);
  }).catch(err=>{
    console.error(err);
  })

  fetch('/courses/get-all-group-courses')
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    setGroupCourses(data.courses);
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

 
  return (
      
 <div className='admCouDiv'>
<AdminHeader />
{/* <Link to={`/`}>
   <Button className='backbtn' variant="outlined"   onClick={() => {
    alert('clicked');
  }}> back</Button>
  </Link> */}

     <h4>courses</h4>
     <div className='tablediv'>
     <table className="table table-striped">
                <thead>
                    <tr>
                    {/* <th>Id</th> */}
                    <th>Name</th>
                    <th>participants</th>
                    <th>lessons</th>
                    <th>hours</th>
                    <th>cost</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                 
              {singlecourses.map((info,index)=>{
              return(
                  <tr key={index}>
                      {/* <td>{info.id}</td> */}
                      <td>{info.name}</td>
                      <td>{info.participants}</td>
                      <td>{info.lessons}</td>
                      <td>{info.hours}</td>
                      <td>{info.cost}</td>
                      <td>
                      {/* <ButtonGroup className='grpbtn' variant="contained" aria-label="outlined small button group"> */}
                      {/* <Link to={`/addCourse`}>    <Button className='addbtn'>Add</Button> </Link> */}
      {/* <Button>Edit</Button> */}
      {/* <Button onClick={handleDelete}>Delete</Button>
    </ButtonGroup> */}
      <DeleteOutlinedIcon onClick={handleDelete}/>
                        </td>
                  </tr>
              )
          }
          
      )}
                    
                </tbody>
            </table>
     </div>
     {/* <div> */}
     <Link to={`/addSingleCourse`}>    <Button className='addbtn'>Add new single course</Button> </Link>
        {/* </div> */}
     <div className='tablediv'>
     <table className="table table-striped">
                <thead>
                    <tr>
                    {/* <th>Id</th> */}
                    <th>Name</th>
                    <th>participants</th>
                    <th>lessons</th>
                    <th>hours</th>
                    <th>cost</th>
                    <th>time</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                 
              {groupcourses.map((info,index)=>{
              return(
                  <tr key={index}>
                      {/* <td>{info.id}</td> */}
                      <td>{info.name}</td>
                      <td>{info.participants}</td>
                      <td>{info.lessons}</td>
                      <td>{info.hours}</td>
                      <td>{info.cost}</td>
                      <td>{info.time}</td>
                      <td>
                      {/* <ButtonGroup className='grpbtn' variant="contained" aria-label="outlined small button group">
                      {/* <Link to={`/addCourse`}>    <Button className='addbtn'>Add</Button> </Link> */}
      {/* <Button>Edit</Button> */}
      {/* <Button onClick={handleDelete}>Delete</Button>
    </ButtonGroup> */} 
    <DeleteOutlinedIcon onClick={handleDelete}/>
                        </td>
                  </tr>
              )
          }
          
      )}
                    
                </tbody>
            </table>
     </div>
     <Link to={`/addGroupCourse`}>    <Button className='addbtn'>Add new group course</Button> </Link>
        </div>
  );
}

export default AdminCourses;
