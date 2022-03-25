"use strict";
exports.__esModule = true;
var React = require("react");
var Button_1 = require("@mui/material/Button");
require("./addHorse.scss");
var react_1 = require("react");
var axios_1 = require("axios");
var adminHeader_1 = require("../../components/adminHeader/adminHeader");
function AddHorse() {
    var _a = react_1.useState([]), horsess = _a[0], setHorse = _a[1];
    react_1.useEffect(function () {
        //fetch courses
        fetch('/addHorse/get-all-horses')
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            setHorse(data.horses);
            console.log(horsess);
        })["catch"](function (err) {
            console.error(err);
        });
    }, []);
    function addhorse(ev) {
        ev.preventDefault();
        var form = ev.target;
        console.log({ form: form });
        axios_1["default"].post('/addHorse/add-new-horse', { name: form[0].value, level: form[1].value, description: form[2].value, age: form[3].value, image: form[4].value })
            .then(function (data) {
            console.log(data);
        })["catch"](function (err) {
            console.error(err);
        });
    }
    return (React.createElement("div", { className: "addOffer" },
        React.createElement(adminHeader_1["default"], null),
        React.createElement("h3", null, "add new horse"),
        React.createElement("form", { className: 'formAddOffer', onSubmit: addhorse },
            React.createElement("input", { type: "text", placeholder: 'insert offer name', name: 'horseName' }),
            React.createElement("input", { type: "number", name: "level", placeholder: 'insert horse"s level' }),
            React.createElement("input", { type: "text", name: "phone", placeholder: 'insert horse"s description' }),
            React.createElement("input", { type: "double", name: "age", placeholder: 'insert horse"s age' }),
            React.createElement("input", { type: "text", name: "phone", placeholder: 'insert horse"s image' }),
            React.createElement(Button_1["default"], { className: 'addbtn', type: "submit" }, "Add")),
        horsess.map(function (t) {
            return React.createElement("p", { key: t._id }, t.name);
        })));
}
exports["default"] = AddHorse;
