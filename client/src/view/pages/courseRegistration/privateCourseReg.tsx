
import './courseRegistration.scss'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
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
import { Icon } from '@iconify/react';
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



function PrivateCourseReg() {
  const [levell, setLevel] = React.useState('');
  const [alertt, setAlert] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [value, onChange] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [registration, setRegistration] = useState({ name: "", start: new Date(), course: "" });
  let dt = new Date();
  const [singleCourseReg, setSingleCoursesReg] = useState([]);
  const includeDatesArray = [new Date('02-27-2022'), new Date('02-28-2022')];
  const notIncludeDatesArray = [] as any;
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

    fetch('/courses/get-all-single-courses')
      .then(res => res.json())
      .then(data => {
        console.log(data.singleCourses, "dateeee");
        setSingleCoursesReg(data.singleCourses);
      }).catch(err => {
        console.error(err);
      })


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


    //   {singleCourseReg.map((reg: any, index) => (
    //     // console.log("aaaaaaaaaa",reg.date)
    //  notIncludeDatesArray.push(reg.date)

    //   ))}


    //   console.log(notIncludeDatesArray,"all reg not included arr")

  }, [])



  function handledates() {
    console.log(singleCourseReg, "all reg datesssssssssss single")

  }

  async function getHorsesByLevel(req: any) {
    await axios.post('/addHorse/get-horse-by-level', { level: req.level })
      .then(data => {
        console.log(data, "dataaaa");
        setHorsesByLvl(data.data.horses);
        // console.log(horsesByLvl);
      }).catch(err => {
        console.error(err);
      })

  }

  function checkDateAvailabilty(ev: any) {
    // console.log(ev, " " , notIncludeDatesArray);
    // console.log(notIncludeDatesArray.indexOf(ev) > -1);
    //  return(notIncludeDatesArray.indexOf(ev) > -1);

  }



  const filterDays = (date: any) => {
    // Disable Weekends and group cpurses days
    if (date.getDay() === 5 || date.getDay() === 6 || date.getDay() === 3 || date.getDay() === 2 || date.getMonth() < dt.getMonth() ||
      (date.getDate() < dt.getDate() && date.getMonth() === dt.getMonth())) {
      // || checkDateAvailabilty(date)

      return false;
    } else {
      return true;
    }


  }


  function handleRegister(ev: any) {
    ev.preventDefault();
    if (notIncludeDatesArray.includes(startDate)) {
      alert('hour is not available');
    }
    const form = ev.target;
    console.log({ form })
    console.log(startDate, "start date")
    //  form[6].value
    axios.post('/registrations/add-new-single-registration', { level: levell, name: form[2].value, age: form[4].value, date: startDate, horse: chosenhorse, trainer: chosentrainer })
      .then(data => {
        const newRegDate = form[6].value;

        alert("you have successfully registered");

      }).catch(err => {
        console.error(err);
      })
  }

  const handleChoseLevel = (event: any) => {
    setLevel(event.target.value);
    // console.log(levell)
    dispatch(fetchTrainerByLevel({ "level": event.target.value }));
    getHorsesByLevel({ "level": event.target.value })

    {
      singleCourseReg.map((reg: any, index) => (
        // console.log("aaaaaaaaaa",reg.date)
        notIncludeDatesArray.push(reg.date)

      ))
    }


    console.log(notIncludeDatesArray, "all reg not included arr")

  };

  const handleChoseHorse = (event: any) => {
    console.log(event.target.value, "122222")
    setchosenHorse(event.target.value);
  };

  const handleChoseTrainer = (event: any) => {
    console.log(event.target.value, "111111")
    setchosenTrainer(event.target.value);
  };


  function changeStartDate(date: any) {
    // date=>setStartDate(date)
    setStartDate(date);
    // console.log(date.getHours.getMinutes)
    // console.log(typeof(date)," ",date)
    setEndDate(date);
    console.log(startDate, "start date")

    singleCourseReg.map((reg: any, index) => (
      // console.log("aaaaaaaaaa",reg.date)
      notIncludeDatesArray.push(reg.date)

    ))
  console.log(startDate,"starttd ate")
  console.log(notIncludeDatesArray, "all reg not included arr")
    // console.log(date.toString(),"aaaaaaaaaaaaaaaaaaa")
    // console.log(form[6].value,"bbbbbbbbbbbbb")
    if (notIncludeDatesArray.includes(startDate.toString())) {
      alert('hour is not available');
    }

    if (notIncludeDatesArray.indexOf(startDate) > -1) {
      console.log("hoho")
      alert('hour is not available');
    }

    console.log(notIncludeDatesArray)
    console.log(notIncludeDatesArray.includes('Thu Mar 31 2022 14:00:00 GMT+0300 (Israel Daylight Time)'))


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
      {/* <Button variant="contained" onClick={handledates} className="aaaa">get dates</Button> */}
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

        <DatePicker
          id="meeting-time"
          isClearable
          placeholderText="Select Start Date"
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mm"
          selected={startDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          // events={singleCourseReg}
          //  includeDates={includeDatesArray}
          filterDate={filterDays}

          onChange={changeStartDate}

        />
        {/* 
        <Button variant="contained" onClick={validate} className="nextBtn"> */}
        <Icon icon="carbon:next-outline" onClick={validate} width="25" height="25" />
        {/* </Button> */}

        {alertt &&
          <div className="popup">


            <Box className='mybox1' sx={{ minWidth: 120 }}>
              <FormControl fullWidth>

                <InputLabel id="demo-simple-select-label">choose preferred horse</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={chosenhorse}
                  label="horse"
                  onChange={handleChoseHorse}
                >
                  {horsesByLvl.map((horse: any, index) => (
                    <MenuItem value={horse.name}> {horse.name}</MenuItem>
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
                  id="demo-simple-select"
                  value={chosentrainer}
                  label="horse"
                  onChange={handleChoseTrainer}
                >
                  {status === 'loading' ? <div>Loading...</div> : trainerByLevel.map((t: any, index: any) => (

                    <MenuItem value={t.name}> {t.name}</MenuItem>
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
