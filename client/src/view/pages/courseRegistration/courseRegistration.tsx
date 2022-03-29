
import './courseRegistration.scss'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import 'react-calendar/dist/Calendar.css';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-datepicker/dist/react-datepicker.css";
import 'react-time-picker/dist/TimePicker.css';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper } from '@mui/material';
import Header from '../../components/header/header';
import { orange } from '@mui/material/colors';

const primary = orange[100]; // #f44336
interface TimeManagement {
  start: Date;
  end: Date;
  name: string;
  course: string;

}

// interface Data {
//   name: string;
//   participants: number;
//   lessons: number;
//   hours: string;
//   cost: number;
//   time:string
// }


const coursesRegis: Array<TimeManagement> = [
  {
    start: new Date(2022, 3, 22, 4, 30),
    end: new Date(2022, 3, 22, 5, 30),
    name: "lama",
    course: "Group lessons",

  }
];


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.light,
    // backgroundColor:{main},
    color: theme.palette.common.white,
    innerWidth: 10,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    innerWidth: 10,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



function CourseRegistration() {
  const [courseType, setcourseType] = React.useState('');
  const [alertt, setAlert] = useState(false);
  const [level, setLevel] = React.useState('');
  const [endDate, setEndDate] = useState(new Date());
  const [registration, setRegistration] = useState({ name: "", start: new Date(), end: new Date(), course: "" });
  const [allReg, setAllReg] = useState(coursesRegis);
  let dt = new Date(2022, 3, 22, 7, 30);
  const [groupcourses, setGroupCourses] = useState<Array<any>>([{ id: 0, name: "", participants: 0, lessons: 0, hours: 0, cost: 0, time: "" }])
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  const [coursesByLvl, setcoursesByLvl] = useState([])
  const [isChecked, setIsChecked] = useState(false);
  const [checkedState, setCheckedState] = useState(
    new Array(groupcourses.length).fill(false)
  );
  const [total, setTotal] = useState(0);
  const [availableSpaces, setAvailableSpaces] = useState([]);
  const [chosenCourse, setChosenCourse] = useState([]);
  const [chosenCourseTime, setChosenCourseTime] = useState([]);
  


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

  function handleRegister(ev: any) {
    ev.preventDefault();
    const form = ev.target;
    console.log({ form })
    axios.post('/registrations/add-new-registration', { level: level, name: form[2].value, age: form[4].value, course: chosenCourse,courseTime:chosenCourseTime })
      .then(data => {
        console.log(data);
        // setAvailableSpaces(availableSpaces-1);
        setAllReg([...allReg, registration]);
        alert("you have successfully registered")
        nav('/homepage')
      }).catch(err => {
        console.error(err);
      })
  }


  async function getCoursesByLevel(req: any) {
    console.log(req.level)
    await axios.post('/courses/get-course-by-level', { level: req.level })
      .then(data => {
        console.log(data.data.courses, "dataaaa");
        setcoursesByLvl(data.data.courses);

        {
          coursesByLvl.map((row: any, index: any) => (
            setAvailableSpaces(row.availableSpaces)
          ))
        };
        //           console.log(data.data.courses[0].name,"spacessssssss");
        // console.log(availableSpaces);
      }).catch(err => {
        console.error(err);
      })
  }

  const handleChoseLevel = (event: any) => {
    setAlert(true);
    setLevel(event.target.value);
    getCoursesByLevel({ "level": event.target.value });
  };

  // position:any,value:any
  function handleCheck(event: any) {
    // console.log(event)
    console.log(event.target)
    const updatedCheckedState = checkedState.map((item, index) =>
      index === event.target.id ? item : !item
      // console.log(item)
    );
    console.log(checkedState, "checked state")
    setCheckedState(updatedCheckedState);
    console.log(updatedCheckedState)
    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === false) {
          return sum + groupcourses[index].cost;
        }
        return sum;
      },
      0
    );
    console.log(event.target.name)
    setChosenCourse(event.target.name)
    setChosenCourseTime(event.target.value)
    console.log(event.target.value,"id")
    console.log("total", total)
    setTotal(totalPrice);
  }

  return (
    <div className='mydiv'>
      <Header></Header>
      <form onSubmit={handleRegister} className='inputDiv'>

        <Box className='mybox1' sx={{ minWidth: 120 }}>
          <FormControl required fullWidth>

            <InputLabel id="demo-simple-select-label">Level</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select1"
              value={level}
              label="Level"
              onChange={handleChoseLevel}
            >
              <MenuItem value={1}>Beginner</MenuItem>
              <MenuItem value={2}>Intermediate</MenuItem>
              <MenuItem value={3}>Advanced</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <TextField
          className="txtfield"
          autoComplete="given-name"
          name="Name"
          required
          id="Name"
          label="Name"
          autoFocus
        />
        <TextField
          className="agefield"
          autoComplete="given-age"
          name="Age"
          required
          id="Age"
          label="Age"
          autoFocus
        />

        {alertt &&
          <div className="popup">

            <TableContainer className="table" component={Paper}>
              <Table sx={{ Width: 300 }} aria-label="customized table">
                <TableHead>
                  <TableRow>

                    <StyledTableCell align="center">name</StyledTableCell>
                    <StyledTableCell align="center"> participants</StyledTableCell>
                    <StyledTableCell align="center"> lessons </StyledTableCell>
                    <StyledTableCell align="center"> hours </StyledTableCell>
                    <StyledTableCell align="center"> cost </StyledTableCell>
                    <StyledTableCell align="center"> time </StyledTableCell>
                    <StyledTableCell align="center"> available spaces </StyledTableCell>
                    <StyledTableCell align="center"> book! </StyledTableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {coursesByLvl.map((row: any, index: any) => (
                    <StyledTableRow key={index}>

                      <StyledTableCell align="center">{row.name}</StyledTableCell>
                      <StyledTableCell align="center">{row.participants}</StyledTableCell>
                      <StyledTableCell align="center">{row.lessons}</StyledTableCell>
                      <StyledTableCell align="center">{row.hours}</StyledTableCell>
                      <StyledTableCell align="center">{row.cost}</StyledTableCell>
                      <StyledTableCell align="center">{row.time}</StyledTableCell>
                      <StyledTableCell align="center">{row.availableSpaces}</StyledTableCell>
                      <StyledTableCell align="center">
                        <input
                          type="checkbox"
                          id={index}
                          name={row.name}
                          value={row.time}
                          checked={checkedState[index]}
                          onChange={handleCheck}
                        />
                      </StyledTableCell>


                    </StyledTableRow>


                  ))}
                </TableBody>
              </Table>
            </TableContainer>



          </div>

        }


        <Button variant="contained" type="submit" className="regBtn"><Icon icon="academicons:preregistered" width="25" height="25" /></Button>
      </form>
    </div>
  )
}

export default CourseRegistration;
