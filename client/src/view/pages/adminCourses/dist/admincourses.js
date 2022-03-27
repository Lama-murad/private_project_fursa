"use strict";
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
require("./admincourses.scss");
var react_2 = require("react");
var Button_1 = require("@mui/material/Button");
var react_router_dom_1 = require("react-router-dom");
var adminHeader_1 = require("../../components/adminHeader/adminHeader");
var DeleteOutlined_1 = require("@mui/icons-material/DeleteOutlined");
function AdminCourses() {
    var _a = react_2.useState([{ name: "", participants: 0, lessons: 0, hours: 0, cost: 0, time: "", level: "" }]), groupcourses = _a[0], setGroupCourses = _a[1];
    var _b = react_2.useState([{ id: 0, name: "", participants: 0, lessons: 0, cost: 0 }]), details = _b[0], setDetails = _b[1];
    var _c = react_2.useState([{ name: "", participants: 0, lessons: 0, hours: 0, cost: 0 }]), singlecourses = _c[0], setSingleCourses = _c[1];
    react_1.useEffect(function () {
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
    function handleDelete(event) {
        event.preventDefault();
        var id = event.target.value;
        axios_1["default"]["delete"]("http://localhost:3004/courses/" + id)
            .then(function (res) {
            console.log(res);
            console.log(res.data);
        });
    }
    return (React.createElement("div", { className: 'admCouDiv' },
        React.createElement(adminHeader_1["default"], null),
        React.createElement("h4", null, "courses"),
        React.createElement("div", { className: 'tablediv' },
            React.createElement("table", { className: "table table-striped" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Name"),
                        React.createElement("th", null, "participants"),
                        React.createElement("th", null, "lessons"),
                        React.createElement("th", null, "hours"),
                        React.createElement("th", null, "cost"),
                        React.createElement("th", null, "time"),
                        React.createElement("th", null, "level"),
                        React.createElement("th", null, "Delete"))),
                React.createElement("tbody", null, groupcourses.map(function (info, index) {
                    return (React.createElement("tr", { key: index },
                        React.createElement("td", null, info.name),
                        React.createElement("td", null, info.participants),
                        React.createElement("td", null, info.lessons),
                        React.createElement("td", null, info.hours),
                        React.createElement("td", null, info.cost),
                        React.createElement("td", null, info.time),
                        React.createElement("td", null, info.level),
                        React.createElement("td", null,
                            React.createElement(DeleteOutlined_1["default"], { onClick: handleDelete }))));
                })))),
        React.createElement(react_router_dom_1.Link, { to: "/addGroupCourse" },
            "    ",
            React.createElement(Button_1["default"], { className: 'addbtn' }, "Add new group course"),
            " ")));
}
exports["default"] = AdminCourses;
