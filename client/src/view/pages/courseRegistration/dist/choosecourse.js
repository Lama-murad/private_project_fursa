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
require("react-calendar/dist/Calendar.css");
var Box_1 = require("@mui/material/Box");
var InputLabel_1 = require("@mui/material/InputLabel");
var MenuItem_1 = require("@mui/material/MenuItem");
var FormControl_1 = require("@mui/material/FormControl");
var Select_1 = require("@mui/material/Select");
var Button_1 = require("@mui/material/Button");
require("react-datetime-picker/dist/DateTimePicker.css");
require("react-datepicker/dist/react-datepicker.css");
require("react-time-picker/dist/TimePicker.css");
var hooks_1 = require("../../../app/hooks");
var axios_1 = require("axios");
var react_router_dom_1 = require("react-router-dom");
var header_1 = require("../../components/header/header");
var react_3 = require("@iconify/react");
var coursesRegis = [
    {
        start: new Date(2022, 3, 22, 4, 30),
        end: new Date(2022, 3, 22, 5, 30),
        name: "lama",
        course: "Group lessons"
    }
];
function ChooseCourse() {
    var _a = react_1["default"].useState(''), courseType = _a[0], setcourseType = _a[1];
    var _b = react_1["default"].useState(''), level = _b[0], setLevel = _b[1];
    var _c = react_2.useState(false), alertt = _c[0], setAlert = _c[1];
    var _d = react_1["default"].useState(''), course = _d[0], setCourse = _d[1];
    var _e = react_2.useState(new Date()), dateState = _e[0], setDateState = _e[1];
    // const [startDate, setStateDate] = useState(new Date())
    var _f = react_2.useState(new Date()), date = _f[0], setDate = _f[1];
    var _g = react_2.useState(new Date()), startDate = _g[0], setStartDate = _g[1];
    var _h = react_2.useState(new Date()), value = _h[0], onChange = _h[1];
    var _j = react_2.useState(new Date()), endDate = _j[0], setEndDate = _j[1];
    var _k = react_2.useState({ name: "", start: new Date(), end: new Date(), course: "" }), registration = _k[0], setRegistration = _k[1];
    var _l = react_2.useState(coursesRegis), allReg = _l[0], setAllReg = _l[1];
    var dt = new Date(2022, 3, 22, 7, 30);
    var maxTime = dt.setDate(dt.getDate() + 5);
    var includeDatesArray = [new Date('02-27-2022'), new Date('02-28-2022')];
    var navigate = react_router_dom_1.useNavigate();
    var dispatch = hooks_1.useAppDispatch();
    var filterDays = function (date) {
        // Disable Weekends
        if (date.getDay() === 0 || date.getDay() === 6) {
            return false;
        }
        else {
            return true;
        }
    };
    function handleChooseCourse(ev) {
        var form = ev.target;
        console.log({ form: form });
        if (form[0].value == "group_lesson") {
            navigate('/courseregistration');
        }
        if (form[0].value == "signle_lesson") {
            navigate('/privateCourseReg');
        }
    }
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
    var handleChoseCourse = function (event) {
        setCourse(event.target.value);
        if (event.target.value === 'private lessons') {
            console.log('fat 3l if private lessons');
            setAlert(true);
        }
    };
    var handleChoseLevel = function (event) {
        setLevel(event.target.value);
    };
    function changeStartDate(date) {
        // date=>setStartDate(date)
        setStartDate(date);
        console.log(date.getHours.getMinutes);
        setEndDate(date);
    }
    var validate = function (event) {
        event.preventDefault();
        setAlert(true);
        return;
        // setAlert(false);
    };
    return (react_1["default"].createElement("div", { className: 'mydiv' },
        react_1["default"].createElement(header_1["default"], null),
        react_1["default"].createElement("form", { onSubmit: handleChooseCourse, className: 'inputDiv' },
            react_1["default"].createElement(Box_1["default"], { className: 'mybox', sx: { minWidth: 120 } },
                react_1["default"].createElement(FormControl_1["default"], { required: true, fullWidth: true },
                    react_1["default"].createElement(InputLabel_1["default"], { id: "demo-simple-select-label" }, "Course"),
                    react_1["default"].createElement(Select_1["default"], { labelId: "demo-simple-select-label", id: "demo-simple-select", value: course, label: "Course", onChange: handleChoseCourse },
                        react_1["default"].createElement(MenuItem_1["default"], { value: "group_lesson" }, "Group lessons"),
                        react_1["default"].createElement(MenuItem_1["default"], { value: "signle_lesson" }, "Single lesson")))),
            react_1["default"].createElement(Button_1["default"], { type: "submit", className: "regBtn" },
                react_1["default"].createElement(react_3.Icon, { icon: "carbon:next-outline", width: "25", height: "25" })))));
}
exports["default"] = ChooseCourse;
