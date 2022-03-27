
import './courseRegistration.scss'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Checkbox from '@mui/material/Checkbox';
import moment from 'moment'
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "react-datetime-picker/dist/DateTimePicker.css";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
// import { registerLocale } from "react-datepicker";
// import ro from 'date-fns/locale/ro';
import "react-datepicker/dist/react-datepicker.css";
import 'react-time-picker/dist/TimePicker.css';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import axios from 'axios';
import DatePicker from "react-datepicker";
// import { addAppointment, selectAppointment } from '../../../features/coursesRegistrations/registrationSlice'
// import { registration } from '../../../features/coursesRegistrations/registrationSlice';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { Paper } from '@mui/material';
import Header from '../../components/header/header';
interface TimeManagement {
  start: Date;
  end: Date;
  name: string;
  course: string;

}

interface Data {
  name: string;
  participants: number;
  lessons: number;
  hours: string;
  cost: number;
  time:string
}


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
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    innerWidth:10,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    innerWidth:10,
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
  const [groupcourses, setGroupCourses] = useState<Array<any>>([{id:0, name: "", participants: 0, lessons: 0, hours: 0, cost: 0, time: "" }])
  const nav = useNavigate();
  const dispatch = useAppDispatch();
    const [coursesByLvl, setcoursesByLvl] = useState([])
  const [isChecked, setIsChecked] = useState(false);
  const [checkedState, setCheckedState] = useState(
    new Array(groupcourses.length).fill(false)
);
const [total, setTotal] = useState(0);
const [chosenCourse, setChosenCourse] = useState([]);


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

  const filterDays = (date: any) => {
    // Disable Weekends
    if (date.getDay() === 0 || date.getDay() === 6) {

      return false;
    } else {
      return true;
    }
  }

  function handleRegistration() {
    setAllReg([...allReg, registration]);
    console.log(allReg);

  }

  function handleRegister(ev: any) {
    ev.preventDefault();
    const form = ev.target;
    console.log({ form })
    axios.post('/registrations/add-new-registration', { level: level, name: form[2].value, age: form[4].value, course:chosenCourse})
      .then(data => {
        console.log(data);
        alert("you have successfully registered")
        nav('/homepage')
      }).catch(err => {
        console.error(err);
      })
  }


  async function getCoursesByLevel(req: any) {
      console.log(req.level)
      await axios.post('/courses/get-course-by-level', { level:req.level})
        .then(data => {
          console.log(data, "dataaaa");
          setcoursesByLvl(data.data.courses);
          console.log(data.data.courses);
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
  function handleCheck(event:any) {
     // position.preventDefault();
    console.log(event)
    console.log(event.target)
    const updatedCheckedState = checkedState.map((item, index) =>
    index === event.target.id ? item : !item
    // console.log(item)
  );
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
console.log("total" ,total)
  setTotal(totalPrice);
  }


  const validate = (event: any) => {

    event.preventDefault();
    setAlert(true);
    return;
  };
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
  <Table sx={{ minWidth: 300 }} aria-label="customized table">
    <TableHead>
      <TableRow>

        <StyledTableCell align="center">name</StyledTableCell>
        <StyledTableCell align="center"> participants</StyledTableCell>
        <StyledTableCell align="center"> lessons </StyledTableCell>
        <StyledTableCell align="center"> hours </StyledTableCell>
        <StyledTableCell align="center"> cost </StyledTableCell>
        <StyledTableCell align="center"> time </StyledTableCell>
        <StyledTableCell align="center"> choose </StyledTableCell>

      </TableRow>
    </TableHead>
    <TableBody>
      {coursesByLvl.map((row:any ,index:any) => (
        <StyledTableRow key={index}>
       
          <StyledTableCell align="center">{row.name}</StyledTableCell>
          <StyledTableCell align="center">{row.participants}</StyledTableCell>
          <StyledTableCell align="center">{row.lessons}</StyledTableCell>
          <StyledTableCell align="center">{row.hours}</StyledTableCell>
          <StyledTableCell align="center">{row.cost}</StyledTableCell>
          <StyledTableCell align="center">{row.time}</StyledTableCell>
          <StyledTableCell align="center">
          <input
  type="checkbox"
  id={index}
  name={row.name}
  value={row.name}
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


<Button variant="contained" type="submit" className="regBtn">register</Button>
      </form>
    </div>
  )
}

export default CourseRegistration;
