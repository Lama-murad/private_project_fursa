
import './courseRegistration.scss'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import DatePicker from "react-datepicker";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "react-datetime-picker/dist/DateTimePicker.css";
import Header from '../../components/header/header';
import "react-datepicker/dist/react-datepicker.css";
import 'react-time-picker/dist/TimePicker.css';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import axios from 'axios';
// import Horses from '../../../../../server/model/schema/horsesModel';

import DatePicker from "react-datepicker";
// import { addAppointment, selectAppointment } from '../../../features/coursesRegistrations/registrationSlice'
// import { registration } from '../../../features/coursesRegistrations/registrationSlice';
import { fetchTrainerByLevel, getStatus } from '../../../features/trainerReducer';
import { getTrainers } from '../../../features/trainerReducer';

interface TimeManagement {
  start: Date;
  end: Date;
  name: string;
  course: string;

}

const coursesRegis: Array<TimeManagement> = [
  {
    start: new Date(2022, 3, 22, 4, 30),
    end: new Date(2022, 3, 22, 5, 30),
    name: "lama",
    course: "Group lessons",

  }
];


function PrivateCourseReg() {
  const [levell, setLevel] = React.useState('');
  const [alertt, setAlert] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dateState, setDateState] = useState(new Date())
  const [startDate, setStartDate] = useState(new Date());
  const [value, onChange] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [registration, setRegistration] = useState({ name: "", start: new Date(), end: new Date(), course: "" });
  const [allReg, setAllReg] = useState(coursesRegis);
  let dt = new Date();
  // const maxTime = dt.setDate(dt.getDate() + 5);
  const includeDatesArray = [new Date('02-27-2022'), new Date('02-28-2022')]
  const [groupcourses, setGroupCourses] = useState<Array<any>>([{ name: "", participants: 0, lessons: 0, hours: 0, cost: 0, time: "" }])
  const [horsess, setHorse] = useState([])
  const [horsesByLvl, setHorsesByLvl] = useState([])
  const [chosenhorse, setchosenHorse] = useState([])
  const [trainers, setTrainer] = useState([])
  const [chosentrainer, setchosenTrainer] = useState([])
  const dispatch = useAppDispatch();
  const trainerByLevel = useAppSelector(getTrainers)
  const status = useAppSelector(getStatus)



  useEffect(() => {
    //fetch courses
    fetch('/trainer/get-all-trainer')
      .then(res => res.json())
      .then(data => {
        setTrainer(data.trainers);
      }).catch(err => {
        console.error(err);
      })


    fetch('/addHorse/get-all-horses')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setHorse(data.horses);
        // console.log(horsess);
      }).catch(err => {
        console.error(err);
      })

  }, [])

  async function getHorsesByLevel(req: any) {
    console.log(req.level)
    await axios.post('/addHorse/get-horse-by-level', { level:req.level})
      .then(data => {
        console.log(data, "dataaaa");
        setHorsesByLvl(data.data.horses);
        console.log(horsesByLvl);
      }).catch(err => {
        console.error(err);
      })

    //   try {
    //     const {level} = req.body;
    //     if (!level ) throw new Error("No data");
    //     const horses = await Horses.find({"level":level});
    //     if(horses){
    //       console.log("true");
    //   }
    //   else{
    //       console.error("false")
    //   }
    // }catch(err){
    //   console.error(err);
    // }

  }




  const filterDays = (date: any) => {
    // Disable Weekends and group cpurses days
    if (date.getDay() === 5 || date.getDay() === 6 || date.getDay() === 3 || date.getDay() === 2 || date.getMonth() < dt.getMonth() || (date.getDate() < dt.getDate() && date.getMonth() === dt.getMonth())) {

      return false;
    } else {
      return true;
    }
  }

  const changeDate = (e: any) => {
    setDateState(e)
  }

  function handleRegistration() {
    setAllReg([...allReg, registration]);
    console.log(allReg);

  }

  function handleRegister(ev: any) {
    ev.preventDefault();
    const form = ev.target;
    console.log({ form })
    axios.post('/registrations/add-new-registration', { course: form[0].value, level: form[2].value, name: form[4].value, age: form[6].value, date: form[8].value })
      .then(data => {
        console.log(data);
        alert("you have successfully registered")
      }).catch(err => {
        console.error(err);
      })
  }

  const handleChoseLevel = (event: any) => {
    setLevel(event.target.value);
    // console.log(levell)
    dispatch(fetchTrainerByLevel({ "level": event.target.value }));
    // console.log("passed the dispatch")
    getHorsesByLevel({ "level": event.target.value });
    console.log("passed the horses func call")

  };

  const handleChoseHorse = (event: any) => {
    setHorse(event.target.value);
  };

  const handleChoseTrainer = (event: any) => {
    setTrainer(event.target.value);
  };

  function changeStartDate(date: any) {
    // date=>setStartDate(date)
    setStartDate(date);
    // console.log(date.getHours.getMinutes)
    setEndDate(date);
  }


  const validate = (event: any) => {
    console.log(levell)
    event.preventDefault();
    setAlert(true);
    return;

    // setAlert(false);
  };

  return (
    <div className='mydiv'>
      <Header></Header>

      {/* //registration inputs */}
      <form onSubmit={handleRegister} className='inputDiv'>

        <Box className='mybox1' sx={{ minWidth: 120 }}>
          <FormControl required fullWidth>

            <InputLabel id="demo-simple-select-label">Level</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select1"
              value={levell}
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

        {/* <DateTimePicker className='DateTimePicker' onChange={onChange} value={value}
      //  includeDates={includeDatesArray} 
      /> */}
        {/* <input type="datetime-local" id="meeting-time"
        name="meeting-time"
        // filterDate={filterDays}
        > */}

        <DatePicker
          id="meeting-time"
          isClearable
          placeholderText="Select Start Date"
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mmaa"
          selected={startDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          //  includeDates={includeDatesArray}
          filterDate={filterDays}
          onChange={changeStartDate}

        />

        <Button variant="contained" onClick={validate} className="nextBtn">next</Button>

        {alertt &&
          <div className="popup">
            {/* <span role="img" aria-label="allowed">✅</span> Alphanumeric Characters
             <br />
             <span role="img" aria-label="not allowed">⛔️</span> * */}
            {/* <form> */}

            <Box className='mybox1' sx={{ minWidth: 120 }}>
              <FormControl fullWidth>

                <InputLabel id="demo-simple-select-label">choose preferred horse</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select1"
                  value={chosenhorse}
                  label="horse"
                  onChange={handleChoseHorse}
                >
                  {horsesByLvl.map((horse: any, index) => (
                    <MenuItem value={index}> {horse.name}</MenuItem>
                  ))}
                  {/* <MenuItem value={1}>Beginner</MenuItem>
              <MenuItem value={2}>Intermediate</MenuItem>
              <MenuItem value={3}>Advanced</MenuItem> */}
                </Select>
              </FormControl>
            </Box>

            <Box className='mybox1' sx={{ minWidth: 120 }}>
              <FormControl fullWidth>

                <InputLabel id="demo-simple-select-label">choose preferred trainer</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select1"
                  value={chosentrainer}
                  label="horse"
                  onChange={handleChoseTrainer}
                >
                  {status === 'loading' ? <div>Loading...</div> : trainerByLevel.map((t: any, index: any) => (

                    <MenuItem value={index}> {t.name} {index}</MenuItem>
                  ))}
                  {/* {trainers.map((t:any, index) => (
     <MenuItem  key={t.name} value={index}> {t.name}</MenuItem>
     ))} */}

                </Select>
              </FormControl>
            </Box>

            {/* </form> */}



          </div>
        }

        <Button variant="contained" type="submit" className="regBtn">register</Button>
      </form>


    </div>
  )
}

export default PrivateCourseReg;
