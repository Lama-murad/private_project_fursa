"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./data.scss");
var react_2 = require("react");
var adminHeader_1 = require("../../components/adminHeader/adminHeader");
var DeleteOutlined_1 = require("@mui/icons-material/DeleteOutlined");
function Data() {
    var _a = react_2.useState([{ courseid: 0, coursaname: "", userid: 0, username: "" }]), details = _a[0], setDetails = _a[1];
    var _b = react_2.useState([{ name: "", age: 0, level: "", course: "" }]), groupcourses = _b[0], setGroupCourses = _b[1];
    var _c = react_2.useState([{ level: "", name: "", age: 0, date: "", horse: "", trainer: "" }]), singlecourses = _c[0], setSingleCourses = _c[1];
    function handleDelete(ev) {
        // ev.prevenntDefault();
        // console.dir(ev.target);
        // axios.delete('http://localhost:3004/participants/').then(({data})=>console.log(data));
    }
    react_1.useEffect(function () {
        fetch('/courses/get-all-group-courses-reg')
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            setGroupCourses(data.groupCoursesReg);
        })["catch"](function (err) {
            console.error(err);
        });
        fetch('/courses/get-all-single-courses-reg')
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            setSingleCourses(data.signleCoursesReg);
        })["catch"](function (err) {
            console.error(err);
        });
    }, []);
    return (React.createElement("div", { className: 'dataDiv' },
        React.createElement(adminHeader_1["default"], null),
        React.createElement("h4", null, "participants in courses management"),
        React.createElement("h5", null, "group courses"),
        React.createElement("div", { className: 'tablediv' },
            React.createElement("table", { className: "table table-striped" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Name"),
                        React.createElement("th", null, "age"),
                        React.createElement("th", null, "level"),
                        React.createElement("th", null, "course"),
                        React.createElement("th", null, "Delete"))),
                React.createElement("tbody", null, groupcourses.map(function (info, index) {
                    return (React.createElement("tr", { key: index },
                        React.createElement("td", null, info.name),
                        React.createElement("td", null, info.age),
                        React.createElement("td", null, info.level),
                        React.createElement("td", null, info.course),
                        React.createElement("td", null,
                            React.createElement(DeleteOutlined_1["default"], { onClick: handleDelete }))));
                })))),
        React.createElement("h5", null, "single courses"),
        React.createElement("div", { className: 'tablediv' },
            React.createElement("table", { className: "table table-striped" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "level"),
                        React.createElement("th", null, "Name"),
                        React.createElement("th", null, "age"),
                        React.createElement("th", null, "date"),
                        React.createElement("th", null, "horse"),
                        React.createElement("th", null, "trainer"),
                        React.createElement("th", null, "Delete"))),
                React.createElement("tbody", null, singlecourses.map(function (info, index) {
                    return (React.createElement("tr", { key: index },
                        React.createElement("td", null, info.level),
                        React.createElement("td", null, info.name),
                        React.createElement("td", null, info.age),
                        React.createElement("td", null, info.date),
                        React.createElement("td", null, info.horse),
                        React.createElement("td", null, info.trainer),
                        React.createElement("td", null,
                            React.createElement(DeleteOutlined_1["default"], { onClick: handleDelete }))));
                }))))));
}
exports["default"] = Data;
