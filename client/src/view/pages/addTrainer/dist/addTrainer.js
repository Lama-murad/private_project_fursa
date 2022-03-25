"use strict";
exports.__esModule = true;
var React = require("react");
var Button_1 = require("@mui/material/Button");
require("./addTrainer.scss");
var react_1 = require("react");
var axios_1 = require("axios");
var adminHeader_1 = require("../../components/adminHeader/adminHeader");
function AddTrainer() {
    var _a = react_1.useState([]), trainer = _a[0], setTrainer = _a[1];
    react_1.useEffect(function () {
        //fetch courses
        fetch('/trainer/get-all-trainer')
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            setTrainer(data.trainers);
        })["catch"](function (err) {
            console.error(err);
        });
    }, []);
    function addTrainer(ev) {
        ev.preventDefault();
        var form = ev.target;
        console.log({ form: form });
        axios_1["default"].post('/trainer/add-new-trainer', { name: form[0].value, level: form[1].value, description: form[2].value, age: form[3].value, image: form[4].value })
            .then(function (data) {
            console.log(data);
        })["catch"](function (err) {
            console.error(err);
        });
    }
    return (React.createElement("div", { className: "addOffer" },
        React.createElement(adminHeader_1["default"], null),
        React.createElement("h3", null, "add new trainer"),
        React.createElement("form", { className: 'formAddOffer', onSubmit: addTrainer },
            React.createElement("input", { type: "text", placeholder: 'insert trainer"s name', name: 'trainerName' }),
            React.createElement("input", { type: "number", name: "level", placeholder: 'insert trainer"s level' }),
            React.createElement("input", { type: "text", name: "phone", placeholder: 'insert trainer"s description' }),
            React.createElement("input", { type: "double", name: "age", placeholder: 'insert trainer"s age' }),
            React.createElement("input", { type: "text", name: "phone", placeholder: 'insert trainers"s image' }),
            React.createElement(Button_1["default"], { className: 'addbtn', type: "submit" }, "Add")),
        trainer.map(function (t) {
            return React.createElement("p", { key: t._id }, t.name);
        })));
}
exports["default"] = AddTrainer;
