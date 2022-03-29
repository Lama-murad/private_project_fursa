"use strict";
exports.__esModule = true;
var react_1 = require("react");
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
    var _b = react_2.useState([]), myCourses = _b[0], setMyCourses = _b[1];
    react_1.useEffect(function () {
        //fetch courses using mongo
        fetch('/courses/get-all-my-courses')
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            setMyCourses(data.courses);
        })["catch"](function (err) {
            console.error(err);
        });
    }, []);
    return (React.createElement("div", { className: 'dataDiv' },
        React.createElement(header_1["default"], null),
        React.createElement("h4", null, "my courses"),
        React.createElement("div", { className: "popup" },
            React.createElement(TableContainer_1["default"], { className: "table", component: material_1.Paper },
                React.createElement(Table_1["default"], { sx: { Width: 300 }, "aria-label": "customized table" },
                    React.createElement(TableHead_1["default"], null,
                        React.createElement(TableRow_1["default"], null,
                            React.createElement(StyledTableCell, { align: "center" }, "name"),
                            React.createElement(StyledTableCell, { align: "center" }, " participants"),
                            React.createElement(StyledTableCell, { align: "center" }, " lessons "),
                            React.createElement(StyledTableCell, { align: "center" }, " hours "),
                            React.createElement(StyledTableCell, { align: "center" }, " cost "),
                            React.createElement(StyledTableCell, { align: "center" }, " time "),
                            React.createElement(StyledTableCell, { align: "center" }, " available spaces "))),
                    React.createElement(TableBody_1["default"], null, myCourses.map(function (row, index) { return (React.createElement(StyledTableRow, { key: index },
                        React.createElement(StyledTableCell, { align: "center" }, row.name),
                        React.createElement(StyledTableCell, { align: "center" }, row.participants),
                        React.createElement(StyledTableCell, { align: "center" }, row.lessons),
                        React.createElement(StyledTableCell, { align: "center" }, row.hours),
                        React.createElement(StyledTableCell, { align: "center" }, row.cost),
                        React.createElement(StyledTableCell, { align: "center" }, row.time),
                        React.createElement(StyledTableCell, { align: "center" }, row.availableSpaces))); })))))));
}
exports["default"] = MyData;
