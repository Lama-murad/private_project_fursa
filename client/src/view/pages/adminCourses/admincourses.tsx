import { useEffect } from 'react';
import axios from 'axios';
import './admincourses.scss';
import { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import AdminHeader from '../../components/adminHeader/adminHeader';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Icon } from '@iconify/react';


function AdminCourses() {
  const [groupcourses, setGroupCourses] = useState<Array<any>>([{ name: "", participants: 0, lessons: 0, hours: 0, cost: 0, time: "", level: "" }])
  const [details, setDetails] = useState<Array<any>>([{ id: 0, name: "", participants: 0, lessons: 0, cost: 0 }]);
  const [singlecourses, setSingleCourses] = useState<Array<any>>([{ name: "", participants: 0, lessons: 0, hours: 0, cost: 0 }])

  useEffect(() => {
    //fetch courses using mongo
    fetch('/courses/get-all-group-courses')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setGroupCourses(data.courses);
      }).catch(err => {
        console.error(err);
      })
  }, [])

  function handleDelete(event: any) {
    console.log(event.target)
    // app.post("/delete-cat", async (req, res) => {
    //   try {
    //     const { id } = req.body;
    
    //     const filter = { _id: id };
    
    //     //delet on  DB
    //     let doc = await Cats.deleteOne(filter);
    
    //     res.send({ ok: true, doc });
    //   } catch (err) {
    //     console.error(err);
    //     res.status(400).send({ error: err.message });
    //   }
    // });

    // ************
    axios.post('/courses/delete-course', { course: event.target.name})


    // event.preventDefault();
    // const id = event.target.value;
    // axios.delete(`http://localhost:3004/courses/${id}`)
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
  }


  return (

    <div className='admCouDiv'>
      <AdminHeader />

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
              <th>time</th>
              <th>level</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>

            {groupcourses.map((info, index) => {
              return (
                <tr key={index}>
                  <td>{info.name}</td>
                  <td>{info.participants}</td>
                  <td>{info.lessons}</td>
                  <td>{info.hours}</td>
                  <td>{info.cost}</td>
                  <td>{info.time}</td>
                  <td>{info.level}</td>
                  <td>
<button onClick={handleDelete} name={info.name} className='deleteIcon'> <Icon icon="ant-design:delete-outlined" width="25" height="25" /></button>
                  </td>
                </tr>
              )
            }

            )}

          </tbody>
        </table>
      </div>
      <Link to={`/addGroupCourse`}>  <Button className='addbtn'>Add new group course</Button> </Link>
    </div>
  );
}

export default AdminCourses;
