"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
require("./courseRegistration.scss");
var react_1 = require("react");
var react_2 = require("react");
var react_3 = require("react");
require("react-calendar/dist/Calendar.css");
var Box_1 = require("@mui/material/Box");
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import DatePicker from "react-datepicker";
var InputLabel_1 = require("@mui/material/InputLabel");
var MenuItem_1 = require("@mui/material/MenuItem");
var FormControl_1 = require("@mui/material/FormControl");
var Select_1 = require("@mui/material/Select");
var TextField_1 = require("@mui/material/TextField");
var Button_1 = require("@mui/material/Button");
require("react-datetime-picker/dist/DateTimePicker.css");
var header_1 = require("../../components/header/header");
require("react-datepicker/dist/react-datepicker.css");
require("react-time-picker/dist/TimePicker.css");
var hooks_1 = require("../../../app/hooks");
var axios_1 = require("axios");
var react_datepicker_1 = require("react-datepicker");
// import { addAppointment, selectAppointment } from '../../../features/coursesRegistrations/registrationSlice'
// import { registration } from '../../../features/coursesRegistrations/registrationSlice';
var trainerReducer_1 = require("../../../features/trainerReducer");
var trainerReducer_2 = require("../../../features/trainerReducer");
var coursesRegis = [
    {
        start: new Date(2022, 3, 22, 4, 30),
        end: new Date(2022, 3, 22, 5, 30),
        name: "lama",
        course: "Group lessons"
    }
];
function PrivateCourseReg() {
    var _a = react_1["default"].useState(''), levell = _a[0], setLevel = _a[1];
    var _b = react_2.useState(false), alertt = _b[0], setAlert = _b[1];
    var _c = react_2.useState(new Date()), date = _c[0], setDate = _c[1];
    var _d = react_2.useState(new Date()), dateState = _d[0], setDateState = _d[1];
    var _e = react_2.useState(new Date()), startDate = _e[0], setStartDate = _e[1];
    var _f = react_2.useState(new Date()), value = _f[0], onChange = _f[1];
    var _g = react_2.useState(new Date()), endDate = _g[0], setEndDate = _g[1];
    var _h = react_2.useState({ name: "", start: new Date(), end: new Date(), course: "" }), registration = _h[0], setRegistration = _h[1];
    var _j = react_2.useState(coursesRegis), allReg = _j[0], setAllReg = _j[1];
    var dt = new Date();
    // const maxTime = dt.setDate(dt.getDate() + 5);
    var includeDatesArray = [new Date('02-27-2022'), new Date('02-28-2022')];
    var _k = react_2.useState([{ name: "", participants: 0, lessons: 0, hours: 0, cost: 0, time: "" }]), groupcourses = _k[0], setGroupCourses = _k[1];
    var _l = react_2.useState([]), horsess = _l[0], setHorse = _l[1];
    var _m = react_2.useState([]), chosenhorse = _m[0], setchosenHorse = _m[1];
    var _o = react_2.useState([]), trainers = _o[0], setTrainer = _o[1];
    var _p = react_2.useState([]), chosentrainer = _p[0], setchosenTrainer = _p[1];
    var dispatch = hooks_1.useAppDispatch();
    var trainerByLevel = hooks_1.useAppSelector(trainerReducer_2.getTrainers);
    var status = hooks_1.useAppSelector(trainerReducer_1.getStatus);
    react_3.useEffect(function () {
        //fetch courses
        fetch('/trainer/get-all-trainer')
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            setTrainer(data.trainers);
        })["catch"](function (err) {
            console.error(err);
        });
        fetch('/addHorse/get-all-horses')
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            setHorse(data.horses);
            console.log(horsess);
        })["catch"](function (err) {
            console.error(err);
        });
    }, []);
    var filterDays = function (date) {
        // Disable Weekends and group cpurses days
        if (date.getDay() === 5 || date.getDay() === 6 || date.getDay() === 3 || date.getDay() === 2 || date.getMonth() < dt.getMonth() || (date.getDate() < dt.getDate() && date.getMonth() === dt.getMonth())) {
            return false;
        }
        else {
            return true;
        }
    };
    var changeDate = function (e) {
        setDateState(e);
    };
    function handleRegistration() {
        setAllReg(__spreadArrays(allReg, [registration]));
        console.log(allReg);
    }
    function handleRegister(ev) {
        ev.preventDefault();
        var form = ev.target;
        console.log({ form: form });
        axios_1["default"].post('/registrations/add-new-registration', { course: form[0].value, level: form[2].value, name: form[4].value, age: form[6].value, date: form[8].value })
            .then(function (data) {
            console.log(data);
            alert("you have successfully registered");
        })["catch"](function (err) {
            console.error(err);
        });
    }
    var handleChoseLevel = function (event) {
        setLevel(event.target.value);
        // console.log(levell)
        dispatch(trainerReducer_1.fetchTrainerByLevel({ "level": levell }));
        // console.log(levell)
    };
    var handleChoseHorse = function (event) {
        setHorse(event.target.value);
    };
    var handleChoseTrainer = function (event) {
        setTrainer(event.target.value);
    };
    function changeStartDate(date) {
        // date=>setStartDate(date)
        setStartDate(date);
        // console.log(date.getHours.getMinutes)
        setEndDate(date);
    }
    var validate = function (event) {
        console.log(levell);
        event.preventDefault();
        setAlert(true);
        return;
        // setAlert(false);
    };
    return (react_1["default"].createElement("div", { className: 'mydiv' },
        react_1["default"].createElement(header_1["default"], null),
        react_1["default"].createElement("form", { onSubmit: handleRegister, className: 'inputDiv' },
            react_1["default"].createElement(Box_1["default"], { className: 'mybox1', sx: { minWidth: 120 } },
                react_1["default"].createElement(FormControl_1["default"], { required: true, fullWidth: true },
                    react_1["default"].createElement(InputLabel_1["default"], { id: "demo-simple-select-label" }, "Level"),
                    react_1["default"].createElement(Select_1["default"], { labelId: "demo-simple-select-label", id: "demo-simple-select1", value: levell, label: "Level", onChange: handleChoseLevel },
                        react_1["default"].createElement(MenuItem_1["default"], { value: 1 }, "Beginner"),
                        react_1["default"].createElement(MenuItem_1["default"], { value: 2 }, "Intermediate"),
                        react_1["default"].createElement(MenuItem_1["default"], { value: 3 }, "Advanced")))),
            react_1["default"].createElement(TextField_1["default"], { className: "txtfield", autoComplete: "given-name", name: "Name", required: true, id: "Name", label: "Name", autoFocus: true }),
            react_1["default"].createElement(TextField_1["default"], { className: "agefield", autoComplete: "given-age", name: "Age", required: true, id: "Age", label: "Age", autoFocus: true }),
            react_1["default"].createElement(react_datepicker_1["default"], { id: "meeting-time", isClearable: true, placeholderText: "Select Start Date", showTimeSelect: true, dateFormat: "MMMM d, yyyy h:mmaa", selected: startDate, selectsStart: true, startDate: startDate, endDate: endDate, 
                //  includeDates={includeDatesArray}
                filterDate: filterDays, onChange: changeStartDate }),
            react_1["default"].createElement(Button_1["default"], { variant: "contained", onClick: validate, className: "nextBtn" }, "next"),
            alertt &&
                react_1["default"].createElement("div", { className: "popup" },
                    react_1["default"].createElement(Box_1["default"], { className: 'mybox1', sx: { minWidth: 120 } },
                        react_1["default"].createElement(FormControl_1["default"], { required: true, fullWidth: true },
                            react_1["default"].createElement(InputLabel_1["default"], { id: "demo-simple-select-label" }, "choose preferred horse"),
                            react_1["default"].createElement(Select_1["default"], { labelId: "demo-simple-select-label", id: "demo-simple-select1", value: chosenhorse, label: "horse", onChange: handleChoseHorse }, horsess.map(function (horse, index) { return (react_1["default"].createElement(MenuItem_1["default"], { key: horse.name, value: index },
                                " ",
                                horse.name)); })))),
                    react_1["default"].createElement(Box_1["default"], { className: 'mybox1', sx: { minWidth: 120 } },
                        react_1["default"].createElement(FormControl_1["default"], { required: true, fullWidth: true },
                            react_1["default"].createElement(InputLabel_1["default"], { id: "demo-simple-select-label" }, "choose preferred trainer"),
                            react_1["default"].createElement(Select_1["default"], { labelId: "demo-simple-select-label", id: "demo-simple-select1", value: chosentrainer, label: "horse", onChange: handleChoseTrainer }, status === 'loading' ? react_1["default"].createElement("div", null, "Loading...") : trainerByLevel.map(function (t, index) { return (react_1["default"].createElement(MenuItem_1["default"], { key: t.name, value: index },
                                " ",
                                t.name)); }))))),
            react_1["default"].createElement(Button_1["default"], { variant: "contained", type: "submit", className: "regBtn" }, "register"))));
}
exports["default"] = PrivateCourseReg;
