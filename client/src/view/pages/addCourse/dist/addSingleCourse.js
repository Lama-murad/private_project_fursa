"use strict";
exports.__esModule = true;
var React = require("react");
var Button_1 = require("@mui/material/Button");
require("./addCourse.scss");
var react_1 = require("react");
var axios_1 = require("axios");
function AddSingleCourse() {
    var _a = react_1.useState([]), singleCourses = _a[0], setSingleCourses = _a[1];
    react_1.useEffect(function () {
        //fetch courses
        fetch('/courses/get-all--single-courses')
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            setSingleCourses(data.courses);
        })["catch"](function (err) {
            console.error(err);
        });
    }, []);
    function addSingleCourse(ev) {
        ev.preventDefault();
        var form = ev.target;
        console.log({ form: form });
        axios_1["default"].post('/courses/add-new-single-course', { name: form[0].value, cost: form[1].value, participants: form[2].value, lessons: form[3].value, hours: form[4].value })
            .then(function (data) {
            console.log(data);
            console.log(data);
        })["catch"](function (err) {
            console.error(err);
        });
    }
    function handleAdd(ev) {
        ev.prevenntDefault();
        console.dir(ev.target);
        var form = ev.target;
        console.log(form[0]);
        axios_1["default"].post('http://localhost:3004/courses', { 'name': form[0].value, 'participants': form[2].value, 'lessons': form[6].value, 'cost': form[2].value }).
            then(function (_a) {
            var data = _a.data;
            return console.log(data);
        });
        alert("course added successfully");
    }
    return (React.createElement("div", { className: "addCourse" },
        React.createElement("h3", null, " add new single lessons"),
        React.createElement(Button_1["default"], { className: 'addbtn', type: "submit" }, "Add"),
        React.createElement("form", { onSubmit: addSingleCourse },
            React.createElement("input", { type: "text", placeholder: 'insert course name', name: 'courseName' }),
            React.createElement("input", { type: "number", name: "cost", placeholder: 'insert course"s cost' }),
            React.createElement("input", { type: "number", name: "participants", placeholder: 'insert participants number' }),
            React.createElement("input", { type: "number", name: "lessons", placeholder: ' how many lessons' }),
            React.createElement("input", { type: "double", name: "hours", placeholder: 'how much hours' }),
            React.createElement("button", { type: 'submit' }, "Add")),
        React.createElement("h1", null, "single lesson"),
        singleCourses.map(function (course) {
            return React.createElement("p", { key: course._id }, course.name);
        })));
}
exports["default"] = AddSingleCourse;
