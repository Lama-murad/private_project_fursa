"use strict";
exports.__esModule = true;
require("./homepage.scss");
var React = require("react");
var courses_1 = require("../courses/courses");
var offers_1 = require("../../components/offersCard/offers");
var hooks_1 = require("../../../app/hooks");
var react_1 = require("react");
var trainerReducer_1 = require("../../../features/trainerReducer");
var offers_2 = require("../../../features/offers");
var offers_3 = require("../../../features/offers");
var header_1 = require("../../components/header/header");
var react_2 = require("@iconify/react");
function Homepage() {
    var _a = react_1.useState([]), kitttens = _a[0], setKittens = _a[1];
    var _b = react_1.useState([]), courses = _b[0], setCourses = _b[1];
    var offers = hooks_1.useAppSelector(offers_2.selectOffers);
    var trainers = hooks_1.useAppSelector(trainerReducer_1.selectrainers);
    var dispatch = hooks_1.useAppDispatch();
    function handleGetOffers() {
        dispatch(offers_3.getOfferAsync());
    }
    return (React.createElement("div", { className: 'maindivHP' },
        React.createElement(header_1["default"], null),
        React.createElement("div", { className: 'animation' }, " "),
        React.createElement("div", { className: 'bodyDiv' },
            React.createElement(courses_1["default"], null),
            React.createElement("button", { className: 'offerBtn', onClick: handleGetOffers },
                React.createElement(react_2.Icon, { icon: "ooui:special-pages-ltr", width: "25", height: "25" })),
            React.createElement("div", { className: "offersDiv" }, offers.status !== 'loading' ? offers.arrOffers.map(function (offer, index) {
                // return (<p key={index}>{offer.name}</p> )
                return React.createElement(offers_1["default"], { key: index, name: offer.name, description: offer.description, cost: offer.cost });
            }) : React.createElement("div", null, "loading")))));
}
exports["default"] = Homepage;
