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
var styles_1 = require("@mui/material/styles");
require("react-calendar/dist/Calendar.css");
var Checkbox_1 = require("@mui/material/Checkbox");
var react_router_dom_1 = require("react-router-dom");
var Box_1 = require("@mui/material/Box");
var InputLabel_1 = require("@mui/material/InputLabel");
var MenuItem_1 = require("@mui/material/MenuItem");
var FormControl_1 = require("@mui/material/FormControl");
var Select_1 = require("@mui/material/Select");
var TextField_1 = require("@mui/material/TextField");
var Button_1 = require("@mui/material/Button");
require("react-datetime-picker/dist/DateTimePicker.css");
// import { registerLocale } from "react-datepicker";
// import ro from 'date-fns/locale/ro';
require("react-datepicker/dist/react-datepicker.css");
require("react-time-picker/dist/TimePicker.css");
var hooks_1 = require("../../../app/hooks");
var axios_1 = require("axios");
var Table_1 = require("@mui/material/Table");
var TableBody_1 = require("@mui/material/TableBody");
var TableCell_1 = require("@mui/material/TableCell");
var TableContainer_1 = require("@mui/material/TableContainer");
var TableHead_1 = require("@mui/material/TableHead");
var TableRow_1 = require("@mui/material/TableRow");
var material_1 = require("@mui/material");
var header_1 = require("../../components/header/header");
var coursesRegis = [
    {
        start: new Date(2022, 3, 22, 4, 30),
        end: new Date(2022, 3, 22, 5, 30),
        name: "lama",
        course: "Group lessons"
    }
];
var StyledTableCell = styles_1.styled(TableCell_1["default"])(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&." + TableCell_1.tableCellClasses.head] = {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            innerWidth: 10
        },
        _b["&." + TableCell_1.tableCellClasses.body] = {
            fontSize: 14
        },
        _b);
});
var StyledTableRow = styles_1.styled(TableRow_1["default"])(function (_a) {
    var theme = _a.theme;
    return ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
            innerWidth: 10
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0
        }
    });
});
function CourseRegistration() {
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
    var _m = react_2.useState([{ id: 0, name: "", participants: 0, lessons: 0, hours: 0, cost: 0, time: "" }]), groupcourses = _m[0], setGroupCourses = _m[1];
    var nav = react_router_dom_1.useNavigate();
    var dispatch = hooks_1.useAppDispatch();
    react_3.useEffect(function () {
        //fetch courses using mongo
        fetch('/courses/get-all-group-courses')
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            setGroupCourses(data.courses);
        })["catch"](function (err) {
            console.error(err);
        });
    }, []);
    var filterDays = function (date) {
        // Disable Weekends
        if (date.getDay() === 0 || date.getDay() === 6) {
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
    function handleCheck() {
    }
    var validate = function (event) {
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
                    react_1["default"].createElement(Select_1["default"], { labelId: "demo-simple-select-label", id: "demo-simple-select1", value: level, label: "Level", onChange: handleChoseLevel },
                        react_1["default"].createElement(MenuItem_1["default"], { value: 1 }, "Beginner"),
                        react_1["default"].createElement(MenuItem_1["default"], { value: 2 }, "Intermediate"),
                        react_1["default"].createElement(MenuItem_1["default"], { value: 3 }, "Advanced")))),
            react_1["default"].createElement(TextField_1["default"], { className: "txtfield", autoComplete: "given-name", name: "Name", required: true, id: "Name", label: "Name", autoFocus: true }),
            react_1["default"].createElement(TextField_1["default"], { className: "agefield", autoComplete: "given-age", name: "Age", required: true, id: "Age", label: "Age", autoFocus: true }),
            react_1["default"].createElement(TableContainer_1["default"], { className: "table", component: material_1.Paper },
                react_1["default"].createElement(Table_1["default"], { sx: { minWidth: 300 }, "aria-label": "customized table" },
                    react_1["default"].createElement(TableHead_1["default"], null,
                        react_1["default"].createElement(TableRow_1["default"], null,
                            react_1["default"].createElement(StyledTableCell, { align: "center" }, "name"),
                            react_1["default"].createElement(StyledTableCell, { align: "center" }, " participants"),
                            react_1["default"].createElement(StyledTableCell, { align: "center" }, " lessons "),
                            react_1["default"].createElement(StyledTableCell, { align: "center" }, " hours "),
                            react_1["default"].createElement(StyledTableCell, { align: "center" }, " cost "),
                            react_1["default"].createElement(StyledTableCell, { align: "center" }, " time "),
                            react_1["default"].createElement(StyledTableCell, { align: "center" }, " choose "))),
                    react_1["default"].createElement(TableBody_1["default"], null, groupcourses.map(function (row) { return (react_1["default"].createElement(StyledTableRow, { key: row._id, onClick: function () { return nav("/" + row._id); } },
                        react_1["default"].createElement(StyledTableCell, { align: "center" }, row.name),
                        react_1["default"].createElement(StyledTableCell, { align: "center" }, row.participants),
                        react_1["default"].createElement(StyledTableCell, { align: "center" }, row.lessons),
                        react_1["default"].createElement(StyledTableCell, { align: "center" }, row.hours),
                        react_1["default"].createElement(StyledTableCell, { align: "center" }, row.cost),
                        react_1["default"].createElement(StyledTableCell, { align: "center" }, row.time),
                        react_1["default"].createElement(StyledTableCell, { align: "center" },
                            react_1["default"].createElement(Checkbox_1["default"], { color: "primary" })))); })))),
            react_1["default"].createElement(Button_1["default"], { variant: "contained", type: "submit", className: "regBtn" }, "register")),
        alertt &&
            react_1["default"].createElement("div", { className: "popup" },
                react_1["default"].createElement("span", { role: "img", "aria-label": "allowed" }, "\u2705"),
                " Alphanumeric Characters",
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("span", { role: "img", "aria-label": "not allowed" }, "\u26D4\uFE0F"),
                " *",
                react_1["default"].createElement("form", null,
                    react_1["default"].createElement(Box_1["default"], { className: 'mybox', sx: { minWidth: 120 } },
                        react_1["default"].createElement(FormControl_1["default"], { required: true, fullWidth: true },
                            react_1["default"].createElement(InputLabel_1["default"], { id: "demo-simple-select-label" }, "Course"),
                            react_1["default"].createElement(Select_1["default"], { labelId: "demo-simple-select-label", id: "demo-simple-select", value: course, label: "Course", onChange: handleChoseCourse },
                                react_1["default"].createElement(MenuItem_1["default"], { value: 10 }, "Group lessons"),
                                react_1["default"].createElement(MenuItem_1["default"], { value: 20 }, "Private lessons"),
                                react_1["default"].createElement(MenuItem_1["default"], { value: 30 }, "single lesson")))),
                    react_1["default"].createElement(Box_1["default"], { className: 'mybox1', sx: { minWidth: 120 } },
                        react_1["default"].createElement(FormControl_1["default"], { required: true, fullWidth: true },
                            react_1["default"].createElement(InputLabel_1["default"], { id: "demo-simple-select-label" }, "Level"),
                            react_1["default"].createElement(Select_1["default"], { labelId: "demo-simple-select-label", id: "demo-simple-select1", value: level, label: "Level", onChange: handleChoseLevel },
                                react_1["default"].createElement(MenuItem_1["default"], { value: 1 }, "Beginner"),
                                react_1["default"].createElement(MenuItem_1["default"], { value: 2 }, "Intermediate"),
                                react_1["default"].createElement(MenuItem_1["default"], { value: 3 }, "Advanced"))))))));
}
exports["default"] = CourseRegistration;
