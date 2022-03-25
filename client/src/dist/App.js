"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.scss");
// import TextInput from "./features/text/TextInput";
var hooks_1 = require("../src/app/hooks");
var products_1 = require("./features/products");
var trainerReducer_1 = require("./features/trainerReducer");
var signin_1 = require("./view/pages/signIn/signin");
// const students:Array<Place> = [{name:'Saleem', place:'Mashad'},{name:'Mona',place:"Nazereth"}];
// interface Place{
//   name:string;
//   place:string
// }
var text = "hii all";
function App() {
    var dispatch = hooks_1.useAppDispatch();
    var products = hooks_1.useAppSelector(products_1.selectProducts);
    var trainers = hooks_1.useAppSelector(trainerReducer_1.selectrainers);
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "App-header" },
            react_1["default"].createElement(signin_1["default"], null),
            react_1["default"].createElement("div", null, products.status !== 'loading' ? products.arrProducts.map(function (product, index) {
                return (react_1["default"].createElement("p", { key: index }, product.title));
            }) : react_1["default"].createElement("div", null, "loading")))));
}
exports["default"] = App;
{ /* <img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.tsx</code> and save to reload.
</p>
<Card />
<p>
  the text  is {text}
</p>

<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a> */
}
