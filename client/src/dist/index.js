"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("./index.css");
var store_1 = require("./app/store");
var react_redux_1 = require("react-redux");
var serviceWorker = require("./serviceWorker");
var react_router_dom_1 = require("react-router-dom");
var App_1 = require("./App");
var homepage_1 = require("./view/pages/homepage/homepage");
var signin_1 = require("./view/pages/signIn/signin");
var signup_1 = require("./view/pages/signUp/signup");
var trainers_1 = require("./view/pages/trainers/trainers");
var horses_1 = require("./view/pages/horses/horses");
var courses_1 = require("./view/pages/courses/courses");
var course_1 = require("./view/pages/course/course");
var courseRegistration_1 = require("./view/pages/courseRegistration/courseRegistration");
var data_1 = require("./view/pages/data/data");
var admincourses_1 = require("./view/pages/adminCourses/admincourses");
var adminpage_1 = require("./view/pages/AdminPage/adminpage");
var TableDatePicker_1 = require("./view/pages/TableDatePicker/TableDatePicker");
var courseregistration2_1 = require("./view/pages/courseRegistration/courseregistration2");
var addOffer_1 = require("./view/pages/addOffer/addOffer");
var userLevel_1 = require("./view/pages/courseRegistration/userLevel");
var addHorse_1 = require("./view/pages/addHorse/addHorse");
var addTrainer_1 = require("./view/pages/addTrainer/addTrainer");
var courseSelection_1 = require("./view/components/courseSelection/courseSelection");
var choosecourse_1 = require("./view/pages/courseRegistration/choosecourse");
var addSingleCourse_1 = require("./view/pages/addCourse/addSingleCourse");
var addGroupCourse_1 = require("./view/pages/addCourse/addGroupCourse");
var privateCourseReg_1 = require("./view/pages/courseRegistration/privateCourseReg");
react_dom_1["default"].render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(react_redux_1.Provider, { store: store_1.store },
        react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
            react_1["default"].createElement(react_router_dom_1.Routes, null,
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(App_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "courses", element: react_1["default"].createElement(courses_1["default"], null) },
                    react_1["default"].createElement(react_router_dom_1.Route, { path: ":courseId", element: react_1["default"].createElement(course_1["default"], null) })),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "homepage", element: react_1["default"].createElement(homepage_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "signIn", element: react_1["default"].createElement(signin_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "signUp", element: react_1["default"].createElement(signup_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "trainers", element: react_1["default"].createElement(trainers_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "horses", element: react_1["default"].createElement(horses_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "courses", element: react_1["default"].createElement(courses_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "data", element: react_1["default"].createElement(data_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "privateCourseReg", element: react_1["default"].createElement(privateCourseReg_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "choosecourse", element: react_1["default"].createElement(choosecourse_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "adminpage", element: react_1["default"].createElement(adminpage_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "addGroupCourse", element: react_1["default"].createElement(addGroupCourse_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "addSingleCourse", element: react_1["default"].createElement(addSingleCourse_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "addOffer", element: react_1["default"].createElement(addOffer_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "TableDatePicker", element: react_1["default"].createElement(TableDatePicker_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "admincourses", element: react_1["default"].createElement(admincourses_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "addHorse", element: react_1["default"].createElement(addHorse_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "addTrainer", element: react_1["default"].createElement(addTrainer_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "courseSelection", element: react_1["default"].createElement(courseSelection_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "userLevel", element: react_1["default"].createElement(userLevel_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "courseRegistration", element: react_1["default"].createElement(courseRegistration_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "courseregistration2", element: react_1["default"].createElement(courseregistration2_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "course/:courseId", element: react_1["default"].createElement(course_1["default"], null) }))),
        ",")), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
