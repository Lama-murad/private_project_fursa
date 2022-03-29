"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
require("./courseRegistration.scss");
var react_1 = require("react");
var react_2 = require("react");
var react_3 = require("react");
require("react-calendar/dist/Calendar.css");
var Box_1 = require("@mui/material/Box");
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
var react_4 = require("@iconify/react");
var react_datepicker_1 = require("react-datepicker");
// import { addAppointment, selectAppointment } from '../../../features/coursesRegistrations/registrationSlice'
// import { registration } from '../../../features/coursesRegistrations/registrationSlice';
var trainerReducer_1 = require("../../../features/trainerReducer");
var trainerReducer_2 = require("../../../features/trainerReducer");
function PrivateCourseReg() {
    var _a = react_1["default"].useState(''), levell = _a[0], setLevel = _a[1];
    var _b = react_2.useState(false), alertt = _b[0], setAlert = _b[1];
    var _c = react_2.useState(new Date()), startDate = _c[0], setStartDate = _c[1];
    var _d = react_2.useState(new Date()), value = _d[0], onChange = _d[1];
    var _e = react_2.useState(new Date()), endDate = _e[0], setEndDate = _e[1];
    var _f = react_2.useState({ name: "", start: new Date(), course: "" }), registration = _f[0], setRegistration = _f[1];
    var dt = new Date();
    var _g = react_2.useState([]), singleCourseReg = _g[0], setSingleCoursesReg = _g[1];
    var includeDatesArray = [new Date('02-27-2022'), new Date('02-28-2022')];
    var notIncludeDatesArray = [];
    var _h = react_2.useState([{ name: "", participants: 0, lessons: 0, hours: 0, cost: 0, time: "" }]), groupcourses = _h[0], setGroupCourses = _h[1];
    var _j = react_2.useState([]), horsess = _j[0], setHorse = _j[1];
    var _k = react_2.useState([]), horsesByLvl = _k[0], setHorsesByLvl = _k[1];
    var _l = react_2.useState([]), chosenhorse = _l[0], setchosenHorse = _l[1];
    var _m = react_2.useState([]), trainers = _m[0], setTrainer = _m[1];
    var _o = react_2.useState([]), chosentrainer = _o[0], setchosenTrainer = _o[1];
    var dispatch = hooks_1.useAppDispatch();
    var trainerByLevel = hooks_1.useAppSelector(trainerReducer_2.getTrainers);
    var status = hooks_1.useAppSelector(trainerReducer_1.getStatus);
    react_3.useEffect(function () {
        fetch('/courses/get-all-single-courses')
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data.singleCourses, "dateeee");
            setSingleCoursesReg(data.singleCourses);
        })["catch"](function (err) {
            console.error(err);
        });
        //fetch courses
        fetch('/trainer/get-all-trainer')
            .then(function (res) { return res.json(); })
            .then(function (data) {
            setTrainer(data.trainers);
        })["catch"](function (err) {
            console.error(err);
        });
        fetch('/addHorse/get-all-horses')
            .then(function (res) { return res.json(); })
            .then(function (data) {
            // console.log(data);
            setHorse(data.horses);
            // console.log(horsess);
        })["catch"](function (err) {
            console.error(err);
        });
        //   {singleCourseReg.map((reg: any, index) => (
        //     // console.log("aaaaaaaaaa",reg.date)
        //  notIncludeDatesArray.push(reg.date)
        //   ))}
        //   console.log(notIncludeDatesArray,"all reg not included arr")
    }, []);
    function handledates() {
        console.log(singleCourseReg, "all reg datesssssssssss single");
    }
    function getHorsesByLevel(req) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1["default"].post('/addHorse/get-horse-by-level', { level: req.level })
                            .then(function (data) {
                            console.log(data, "dataaaa");
                            setHorsesByLvl(data.data.horses);
                            // console.log(horsesByLvl);
                        })["catch"](function (err) {
                            console.error(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    function checkDateAvailabilty(ev) {
        // console.log(ev, " " , notIncludeDatesArray);
        // console.log(notIncludeDatesArray.indexOf(ev) > -1);
        //  return(notIncludeDatesArray.indexOf(ev) > -1);
    }
    var filterDays = function (date) {
        // Disable Weekends and group cpurses days
        if (date.getDay() === 5 || date.getDay() === 6 || date.getDay() === 3 || date.getDay() === 2 || date.getMonth() < dt.getMonth() ||
            (date.getDate() < dt.getDate() && date.getMonth() === dt.getMonth())) {
            // || checkDateAvailabilty(date)
            return false;
        }
        else {
            return true;
        }
    };
    function handleRegister(ev) {
        ev.preventDefault();
        if (notIncludeDatesArray.includes(startDate)) {
            alert('hour is not available');
        }
        var form = ev.target;
        console.log({ form: form });
        console.log(startDate, "start date");
        //  form[6].value
        axios_1["default"].post('/registrations/add-new-single-registration', { level: levell, name: form[2].value, age: form[4].value, date: startDate, horse: chosenhorse, trainer: chosentrainer })
            .then(function (data) {
            var newRegDate = form[6].value;
            alert("you have successfully registered");
        })["catch"](function (err) {
            console.error(err);
        });
    }
    var handleChoseLevel = function (event) {
        setLevel(event.target.value);
        // console.log(levell)
        dispatch(trainerReducer_1.fetchTrainerByLevel({ "level": event.target.value }));
        getHorsesByLevel({ "level": event.target.value });
        {
            singleCourseReg.map(function (reg, index) { return (
            // console.log("aaaaaaaaaa",reg.date)
            notIncludeDatesArray.push(reg.date)); });
        }
        console.log(notIncludeDatesArray, "all reg not included arr");
    };
    var handleChoseHorse = function (event) {
        console.log(event.target.value, "122222");
        setchosenHorse(event.target.value);
    };
    var handleChoseTrainer = function (event) {
        console.log(event.target.value, "111111");
        setchosenTrainer(event.target.value);
    };
    function changeStartDate(date) {
        // date=>setStartDate(date)
        setStartDate(date);
        // console.log(date.getHours.getMinutes)
        // console.log(typeof(date)," ",date)
        setEndDate(date);
        console.log(startDate, "start date");
        singleCourseReg.map(function (reg, index) { return (
        // console.log("aaaaaaaaaa",reg.date)
        notIncludeDatesArray.push(reg.date)); });
        console.log(startDate, "starttd ate");
        console.log(notIncludeDatesArray, "all reg not included arr");
        // console.log(date.toString(),"aaaaaaaaaaaaaaaaaaa")
        // console.log(form[6].value,"bbbbbbbbbbbbb")
        if (notIncludeDatesArray.includes(startDate.toString())) {
            alert('hour is not available');
        }
        if (notIncludeDatesArray.indexOf(startDate) > -1) {
            console.log("hoho");
            alert('hour is not available');
        }
        console.log(notIncludeDatesArray);
        console.log(notIncludeDatesArray.includes('Thu Mar 31 2022 14:00:00 GMT+0300 (Israel Daylight Time)'));
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
            react_1["default"].createElement(react_datepicker_1["default"], { id: "meeting-time", isClearable: true, placeholderText: "Select Start Date", showTimeSelect: true, dateFormat: "MMMM d, yyyy h:mm", selected: startDate, selectsStart: true, startDate: startDate, endDate: endDate, 
                // events={singleCourseReg}
                //  includeDates={includeDatesArray}
                filterDate: filterDays, onChange: changeStartDate }),
            react_1["default"].createElement(react_4.Icon, { icon: "carbon:next-outline", onClick: validate, width: "25", height: "25" }),
            alertt &&
                react_1["default"].createElement("div", { className: "popup" },
                    react_1["default"].createElement(Box_1["default"], { className: 'mybox1', sx: { minWidth: 120 } },
                        react_1["default"].createElement(FormControl_1["default"], { fullWidth: true },
                            react_1["default"].createElement(InputLabel_1["default"], { id: "demo-simple-select-label" }, "choose preferred horse"),
                            react_1["default"].createElement(Select_1["default"], { labelId: "demo-simple-select-label", id: "demo-simple-select", value: chosenhorse, label: "horse", onChange: handleChoseHorse }, horsesByLvl.map(function (horse, index) { return (react_1["default"].createElement(MenuItem_1["default"], { value: horse.name },
                                " ",
                                horse.name)); })))),
                    react_1["default"].createElement(Box_1["default"], { className: 'mybox1', sx: { minWidth: 120 } },
                        react_1["default"].createElement(FormControl_1["default"], { fullWidth: true },
                            react_1["default"].createElement(InputLabel_1["default"], { id: "demo-simple-select-label" }, "choose preferred trainer"),
                            react_1["default"].createElement(Select_1["default"], { labelId: "demo-simple-select-label", id: "demo-simple-select", value: chosentrainer, label: "horse", onChange: handleChoseTrainer }, status === 'loading' ? react_1["default"].createElement("div", null, "Loading...") : trainerByLevel.map(function (t, index) { return (react_1["default"].createElement(MenuItem_1["default"], { value: t.name },
                                " ",
                                t.name)); }))))),
            react_1["default"].createElement(Button_1["default"], { variant: "contained", type: "submit", className: "regBtn" }, "register"))));
}
exports["default"] = PrivateCourseReg;
