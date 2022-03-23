
import './courseRegistration.scss'
import React from 'react'
import { useState } from 'react'
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
import "react-datepicker/dist/react-datepicker.css";
import 'react-time-picker/dist/TimePicker.css';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import axios from 'axios';
import DatePicker from "react-datepicker";
import { addAppointment, selectAppointment } from '../../../features/coursesRegistrations/registrationSlice'
import { registration } from '../../../features/coursesRegistrations/registrationSlice';
import { useNavigate } from "react-router-dom";


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


function ChooseCourse() {
    const [courseType, setcourseType] = React.useState('');
    const [level, setLevel] = React.useState('');
    const [alertt, setAlert] = useState(false);
    const [course, setCourse] = React.useState('');
    const [dateState, setDateState] = useState(new Date())
    // const [startDate, setStateDate] = useState(new Date())
    const [date, setDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [value, onChange] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [registration, setRegistration] = useState({ name: "", start: new Date(), end: new Date(), course: "" });
    const [allReg, setAllReg] = useState(coursesRegis);
    let dt = new Date(2022, 3, 22, 7, 30);
    const maxTime = dt.setDate(dt.getDate() + 5);
    const includeDatesArray = [new Date('02-27-2022'), new Date('02-28-2022')]
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const filterDays = (date: any) => {
        // Disable Weekends
        if (date.getDay() === 0 || date.getDay() === 6) {

            return false;
        } else {
            return true;
        }



    }

    function handleChooseCourse(ev: any) {
        const form = ev.target;
        console.log({ form })
        if (form[0].value == "group_lesson") {
            navigate('/courseregistration')


        }
        if (form[0].value == "signle_lesson") {
            navigate('/courseregistration2')


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



    const handleChoseCourse = (event: any) => {

        setCourse(event.target.value);
        if (event.target.value === 'private lessons') {
            console.log('fat 3l if private lessons')
            setAlert(true);
        }

    };

    const handleChoseLevel = (event: any) => {
        setLevel(event.target.value);
    };

    function changeStartDate(date: any) {
        // date=>setStartDate(date)
        setStartDate(date);
        console.log(date.getHours.getMinutes)
        setEndDate(date);
    }


    const validate = (event: any) => {

        event.preventDefault();
        setAlert(true);
        return;

        // setAlert(false);
    };
    return (
        <div className='mydiv'>

            <Link to={`/homepage`}>
                < button className='backbtn'>
                    back </button>
            </Link>
            {/* //registration inputs */}
            <form onSubmit={handleChooseCourse} className='inputDiv'>

                <Box className='mybox' sx={{ minWidth: 120 }}>
                    <FormControl required fullWidth>

                        <InputLabel id="demo-simple-select-label">Course</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={course}
                            label="Course"
                            onChange={handleChoseCourse}
                        >
                            <MenuItem value={"group_lesson"}>Group lessons</MenuItem>
                            <MenuItem value={"signle_lesson"}>Single lesson</MenuItem>
                        </Select>
                    </FormControl>
                </Box>


                <Button variant="contained" type="submit" className="regBtn">next</Button>
            </form>


        </div>
    )
}

export default ChooseCourse;
