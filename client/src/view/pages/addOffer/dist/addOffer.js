"use strict";
exports.__esModule = true;
var React = require("react");
var Button_1 = require("@mui/material/Button");
require("./addOffer.scss");
var react_1 = require("react");
var axios_1 = require("axios");
var DeleteOutlined_1 = require("@mui/icons-material/DeleteOutlined");
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
    function handleDelete(event) {
        event.preventDefault();
        var id = event.target.value;
        axios_1["default"]["delete"]("http://localhost:3004/courses/" + id)
            .then(function (res) {
            console.log(res);
            console.log(res.data);
        });
    }
    function addOffer(ev) {
        ev.preventDefault();
        var form = ev.target;
        console.log({ form: form });
        axios_1["default"].post('/offers/add-new-offer', { name: form[0].value, description: form[1].value, cost: form[2].value })
            .then(function (data) {
            console.log(data);
            alert("offer is added successfully");
        })["catch"](function (err) {
            console.error(err);
        });
    }
    return (React.createElement("div", { className: "addOffer" },
        React.createElement(adminHeader_1["default"], null),
        React.createElement("h3", null, "add new offer"),
        React.createElement("form", { className: 'formAddOffer', onSubmit: addOffer },
            React.createElement("input", { type: "text", placeholder: 'insert offer name', name: 'offerName' }),
            React.createElement("input", { type: "text", name: "cost", placeholder: 'insert offer"s description' }),
            React.createElement("input", { type: "number", name: "participants", placeholder: 'insert offer"s cost' }),
            React.createElement(Button_1["default"], { className: 'addbtn', type: "submit" }, "Add")),
        React.createElement("div", { className: 'tablediv' },
            React.createElement("table", { className: "table table-striped" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Name"),
                        React.createElement("th", null, "description"),
                        React.createElement("th", null, "cost"),
                        React.createElement("th", null, "Delete"))),
                React.createElement("tbody", null, offers.map(function (info, index) {
                    return (React.createElement("tr", { key: index },
                        React.createElement("td", null, info.name),
                        React.createElement("td", null, info.description),
                        React.createElement("td", null, info.cost),
                        React.createElement("td", null,
                            React.createElement(DeleteOutlined_1["default"], { onClick: handleDelete }))));
                }))))));
}
exports["default"] = AddOffer;
