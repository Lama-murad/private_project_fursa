"use strict";
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
require("./data.scss");
var react_2 = require("react");
var Table_1 = require("@mui/material/Table");
var TableBody_1 = require("@mui/material/TableBody");
var TableCell_1 = require("@mui/material/TableCell");
var TableContainer_1 = require("@mui/material/TableContainer");
var TableHead_1 = require("@mui/material/TableHead");
var TableRow_1 = require("@mui/material/TableRow");
var material_1 = require("@mui/material");
var header_1 = require("../../components/header/header");
var styles_1 = require("@mui/material/styles");
var hooks_1 = require("../../../app/hooks");
var userReducer_1 = require("../../../features/userReducer");
var StyledTableCell = styles_1.styled(TableCell_1["default"])(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&." + TableCell_1.tableCellClasses.head] = {
            backgroundColor: theme.palette.secondary.light,
            // backgroundColor:{main},
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
function MyData() {
    var _a = react_2.useState([{ courseid: 0, coursaname: "", userid: 0, username: "" }]), details = _a[0], setDetails = _a[1];
    var _b = react_2.useState([]), myGCourses = _b[0], setMyGCourses = _b[1];
    var _c = react_2.useState([]), mySCourses = _c[0], setMySCourses = _c[1];
    var dispatch = hooks_1.useAppDispatch();
    var user = hooks_1.useAppSelector(userReducer_1.userInfo);
    var emaill = user.email;
    var emailll = "lama@gmail.com";
    react_1.useEffect(function () {
        //fetch courses using mongo
        axios_1["default"].post('/courses/get-all-my-Gcourses', { email: emailll })
            .then(function (data) {
            console.log(data, "dataaaa");
            setMyGCourses(data.data.courses);
            // console.log(horsesByLvl);
        })["catch"](function (err) {
            console.error(err);
        });
        axios_1["default"].post('/courses/get-all-my-Scourses', { email: emailll })
            .then(function (data) {
            console.log(data, "dataaaa");
            setMySCourses(data.data.courses);
            // console.log(horsesByLvl);
        })["catch"](function (err) {
            console.error(err);
        });
    }, []);
    return (React.createElement("div", { className: 'dataDiv' },
        React.createElement(header_1["default"], null),
        React.createElement("h4", null, "group lessons"),
        React.createElement("div", { className: "popup" },
            React.createElement(TableContainer_1["default"], { className: "table", component: material_1.Paper },
                React.createElement(Table_1["default"], { sx: { Width: 300 }, "aria-label": "customized table" },
                    React.createElement(TableHead_1["default"], null,
                        React.createElement(TableRow_1["default"], null,
                            React.createElement(StyledTableCell, { align: "center" }, "name"),
                            React.createElement(StyledTableCell, { align: "center" }, " age"),
                            React.createElement(StyledTableCell, { align: "center" }, " level "),
                            React.createElement(StyledTableCell, { align: "center" }, " course "))),
                    React.createElement(TableBody_1["default"], null, myGCourses.map(function (row, index) { return (React.createElement(StyledTableRow, { key: index },
                        React.createElement(StyledTableCell, { align: "center" }, row.name),
                        React.createElement(StyledTableCell, { align: "center" }, row.age),
                        React.createElement(StyledTableCell, { align: "center" }, row.level),
                        React.createElement(StyledTableCell, { align: "center" }, row.course))); }))))),
        React.createElement("h4", null, "signle lessons"),
        React.createElement("div", { className: "popup" },
            React.createElement(TableContainer_1["default"], { className: "table", component: material_1.Paper },
                React.createElement(Table_1["default"], { sx: { Width: 300 }, "aria-label": "customized table" },
                    React.createElement(TableHead_1["default"], null,
                        React.createElement(TableRow_1["default"], null,
                            React.createElement(StyledTableCell, { align: "center" }, " level "),
                            React.createElement(StyledTableCell, { align: "center" }, "name"),
                            React.createElement(StyledTableCell, { align: "center" }, " age"),
                            React.createElement(StyledTableCell, { align: "center" }, " date "))),
                    React.createElement(TableBody_1["default"], null, myGCourses.map(function (row, index) { return (React.createElement(StyledTableRow, { key: index },
                        React.createElement(StyledTableCell, { align: "center" }, row.level),
                        React.createElement(StyledTableCell, { align: "center" }, row.name),
                        React.createElement(StyledTableCell, { align: "center" }, row.age),
                        React.createElement(StyledTableCell, { align: "center" }, row.date))); })))))));
}
exports["default"] = MyData;
