"use strict";
exports.__esModule = true;
var React = require("react");
var Button_1 = require("@mui/material/Button");
require("./addOffer.scss");
var react_1 = require("react");
var axios_1 = require("axios");
var adminHeader_1 = require("../../components/adminHeader/adminHeader");
function AddOffer() {
    var _a = react_1.useState([]), offers = _a[0], setOffers = _a[1];
    react_1.useEffect(function () {
        //fetch courses
        fetch('/offers/get-all-offers')
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            setOffers(data.offers);
        })["catch"](function (err) {
            console.error(err);
        });
    }, []);
    function addOffer(ev) {
        ev.preventDefault();
        var form = ev.target;
        console.log({ form: form });
        axios_1["default"].post('/offers/add-new-offer', { name: form[0].value, cost: form[1].value, participants: form[2].value, lessons: form[3].value, hours: form[4].value })
            .then(function (data) {
            console.log(data);
        })["catch"](function (err) {
            console.error(err);
        });
    }
    return (React.createElement("div", { className: "addOffer" },
        React.createElement(adminHeader_1["default"], null),
        React.createElement("h3", null, "add new offer"),
        React.createElement("form", { className: 'formAddOffer', onSubmit: addOffer },
            React.createElement("input", { type: "text", placeholder: 'insert offer name', name: 'offerName' }),
            React.createElement("input", { type: "number", name: "cost", placeholder: 'insert offer"s cost' }),
            React.createElement("input", { type: "number", name: "participants", placeholder: 'insert participants number' }),
            React.createElement("input", { type: "double", name: "hours", placeholder: 'how much hours' }),
            React.createElement(Button_1["default"], { className: 'addbtn', type: "submit" }, "Add")),
        offers.map(function (offer) {
            return React.createElement("p", { key: offer._id }, offer.name);
        })));
}
exports["default"] = AddOffer;
