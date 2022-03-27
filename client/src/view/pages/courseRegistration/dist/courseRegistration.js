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
    var _b = react_2.useState(false), alertt = _b[0], setAlert = _b[1];
    var _c = react_1["default"].useState(''), level = _c[0], setLevel = _c[1];
    var _d = react_2.useState(new Date()), endDate = _d[0], setEndDate = _d[1];
    var _e = react_2.useState({ name: "", start: new Date(), end: new Date(), course: "" }), registration = _e[0], setRegistration = _e[1];
    var _f = react_2.useState(coursesRegis), allReg = _f[0], setAllReg = _f[1];
    var dt = new Date(2022, 3, 22, 7, 30);
    var _g = react_2.useState([{ id: 0, name: "", participants: 0, lessons: 0, hours: 0, cost: 0, time: "" }]), groupcourses = _g[0], setGroupCourses = _g[1];
    var nav = react_router_dom_1.useNavigate();
    var dispatch = hooks_1.useAppDispatch();
    var _h = react_2.useState([]), coursesByLvl = _h[0], setcoursesByLvl = _h[1];
    var _j = react_2.useState(false), isChecked = _j[0], setIsChecked = _j[1];
    var _k = react_2.useState(new Array(groupcourses.length).fill(false)), checkedState = _k[0], setCheckedState = _k[1];
    var _l = react_2.useState(0), total = _l[0], setTotal = _l[1];
    var _m = react_2.useState([]), chosenCourse = _m[0], setChosenCourse = _m[1];
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
    function handleRegistration() {
        setAllReg(__spreadArrays(allReg, [registration]));
        console.log(allReg);
    }
    function handleRegister(ev) {
        ev.preventDefault();
        var form = ev.target;
        console.log({ form: form });
        axios_1["default"].post('/registrations/add-new-registration', { level: level, name: form[2].value, age: form[4].value, course: chosenCourse })
            .then(function (data) {
            console.log(data);
            alert("you have successfully registered");
            nav('/homepage');
        })["catch"](function (err) {
            console.error(err);
        });
    }
    function getCoursesByLevel(req) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(req.level);
                        return [4 /*yield*/, axios_1["default"].post('/courses/get-course-by-level', { level: req.level })
                                .then(function (data) {
                                console.log(data, "dataaaa");
                                setcoursesByLvl(data.data.courses);
                                console.log(data.data.courses);
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
    var handleChoseLevel = function (event) {
        setAlert(true);
        setLevel(event.target.value);
        getCoursesByLevel({ "level": event.target.value });
    };
    // position:any,value:any
    function handleCheck(event) {
        // position.preventDefault();
        console.log(event);
        console.log(event.target);
        var updatedCheckedState = checkedState.map(function (item, index) {
            return index === event.target.id ? item : !item;
        }
        // console.log(item)
        );
        setCheckedState(updatedCheckedState);
        console.log(updatedCheckedState);
        var totalPrice = updatedCheckedState.reduce(function (sum, currentState, index) {
            if (currentState === false) {
                return sum + groupcourses[index].cost;
            }
            return sum;
        }, 0);
        console.log(event.target.name);
        setChosenCourse(event.target.name);
        console.log("total", total);
        setTotal(totalPrice);
    }
    var validate = function (event) {
        event.preventDefault();
        setAlert(true);
        return;
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
            alertt &&
                react_1["default"].createElement("div", { className: "popup" },
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
                            react_1["default"].createElement(TableBody_1["default"], null, coursesByLvl.map(function (row, index) { return (react_1["default"].createElement(StyledTableRow, { key: index },
                                react_1["default"].createElement(StyledTableCell, { align: "center" }, row.name),
                                react_1["default"].createElement(StyledTableCell, { align: "center" }, row.participants),
                                react_1["default"].createElement(StyledTableCell, { align: "center" }, row.lessons),
                                react_1["default"].createElement(StyledTableCell, { align: "center" }, row.hours),
                                react_1["default"].createElement(StyledTableCell, { align: "center" }, row.cost),
                                react_1["default"].createElement(StyledTableCell, { align: "center" }, row.time),
                                react_1["default"].createElement(StyledTableCell, { align: "center" },
                                    react_1["default"].createElement("input", { type: "checkbox", id: index, name: row.name, value: row.name, checked: checkedState[index], onChange: handleCheck })))); }))))),
            react_1["default"].createElement(Button_1["default"], { variant: "contained", type: "submit", className: "regBtn" }, "register"))));
}
exports["default"] = CourseRegistration;
