"use strict";
exports.__esModule = true;
var React = require("react");
require("./addCourse.scss");
var react_1 = require("react");
var axios_1 = require("axios");
var adminHeader_1 = require("../../components/adminHeader/adminHeader");
function AddGroupCourse() {
    var _a = react_1.useState([]), courses = _a[0], setCourses = _a[1];
    react_1.useEffect(function () {
        //fetch courses
        fetch('/courses/get-all-group-courses')
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(1111);
            console.log(data);
            setCourses(data.courses);
            // alert('course added successfully')
        })["catch"](function (err) {
            console.error(err);
        });
    }, []);
    function addGroupCourse(ev) {
        ev.preventDefault();
        var form = ev.target;
        console.log({ form: form });
        axios_1["default"].post('/courses/add-new-group-course', { name: form[0].value, cost: form[1].value, participants: form[2].value, lessons: form[3].value, hours: form[4].value, time: form[5].value, level: form[6].value })
            .then(function (data) {
            console.log(data);
            alert('course added successfully');
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
        React.createElement(adminHeader_1["default"], null),
        React.createElement("h3", null, " add new group courses"),
        React.createElement("form", { onSubmit: addGroupCourse, className: 'groupCourseForm' },
            React.createElement("input", { type: "text", placeholder: 'insert course name', name: 'courseName' }),
            React.createElement("input", { type: "number", name: "cost", placeholder: 'insert course"s cost' }),
            React.createElement("input", { type: "number", name: "participants", placeholder: 'insert participants number' }),
            React.createElement("input", { type: "number", name: "lessons", placeholder: ' how many lessons' }),
            React.createElement("input", { type: "double", name: "hours", placeholder: 'how much hours' }),
            React.createElement("input", { type: "text", name: "time", placeholder: 'time' }),
            React.createElement("input", { type: "text", name: "level", placeholder: 'insert 1-3 level' }),
            React.createElement("button", { type: 'submit' }, "Add")),
        React.createElement("h1", null, "courses"),
        courses.map(function (course) {
            return React.createElement("p", { key: course._id }, course.name);
        })));
}
exports["default"] = AddGroupCourse;
