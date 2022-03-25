"use strict";
exports.__esModule = true;
require("./horses.scss");
var React = require("react");
var card_1 = require("../../components/trainersCard/card");
var react_1 = require("react");
var header_1 = require("../../components/header/header");
function Horses() {
    var _a = react_1.useState([]), horsess = _a[0], setHorse = _a[1];
    var horses = [{ name: 'Ice', image: 'https://i.pinimg.com/736x/85/7b/69/857b69bfcde7627b81f30f685feccd9d.jpg',
            age: 5, level: 1, desc: "description" },
        { name: 'Zoro', image: 'https://i.pinimg.com/736x/ab/91/4b/ab914bc04dd580c1a24bcec2af6ea8fc.jpg',
            age: 10, level: 3, desc: "description" },
        { name: 'Gucci', image: 'https://i.pinimg.com/736x/ef/69/dc/ef69dc135509debcdb2053b00c68f387.jpg',
            age: 9, level: 3, desc: "description" },
        { name: 'Hugsy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhA_YC2KPGviLf8GNwB9rKj4mNyEOtqhxdBg&usqp=CAU',
            age: 8, level: 2, desc: "description" },
        { name: 'Sun', image: 'https://i.pinimg.com/736x/6a/46/b2/6a46b2f617ec9c377ad7fd3f2eb02745.jpg',
            age: 5, level: 1, desc: "description" },
        { name: 'Marko', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuEw9cX-TYZNVZUKM-u-GDm524JK7OdZRXHg&usqp=CAU',
            age: 7, level: 2, desc: "description" },
        { name: 'Simba', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRxxm3-GYTCs4xIf6f8o0OpPW6J7GNsBkxQ&usqp=CAU',
            age: 7, level: 3, desc: "description" },
        { name: 'Vanilla', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9dosAVnCaOYGIlt7zThLnmpHDz-xv0V_dA&usqp=CAU',
            age: 3, level: 1, desc: "description" }];
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
    return (React.createElement("div", { className: "maindivhorses" },
        React.createElement(header_1["default"], null),
        React.createElement("h3", null, "Our horses"),
        React.createElement("div", { className: "maindivhorses_card" }, horsess.map(function (horse, index) {
            //  return <p key={index}>{horse.name}</p>
            return React.createElement(card_1["default"], { key: index, name: horse.name, age: horse.age, level: horse.level, image: horse.image, desc: horse.description });
        }))));
}
exports["default"] = Horses;
