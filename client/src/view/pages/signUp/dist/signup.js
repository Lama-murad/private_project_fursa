"use strict";
exports.__esModule = true;
require("./signup.scss");
var React = require("react");
var TextField_1 = require("@mui/material/TextField");
var Typography_1 = require("@mui/material/Typography");
var axios_1 = require("axios");
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("@iconify/react");
function SignUp() {
    var navigate = react_router_dom_1.useNavigate();
    function handleSignUp(ev) {
        ev.preventDefault();
        var form = ev.target;
        console.log({ form: form });
        axios_1["default"].post('/user/add-new-user', { firstName: form[0].value, lastName: form[2].value, email: form[4].value, password: form[6].value, phoneNumber: form[8].value })
            .then(function (data) {
            console.log(data.data);
            alert(data.data);
            navigate('/signIn');
        })["catch"](function (err) {
            console.error(err);
        });
    }
    return (React.createElement("div", { className: "signup" },
        React.createElement(Typography_1["default"], { component: "h3", variant: "h5", className: "typ" }, "Sign up"),
        React.createElement("form", { onSubmit: handleSignUp, className: "signupform" },
            React.createElement(TextField_1["default"], { className: "textfield", autoComplete: "given-name", name: "firstName", required: true, fullWidth: true, id: "firstName", label: "First Name", autoFocus: true }),
            React.createElement(TextField_1["default"], { className: "textfield", autoComplete: "given-name", name: "lastName", required: true, fullWidth: true, id: "lastName", label: "Last Name", autoFocus: true }),
            React.createElement(TextField_1["default"], { className: "textfield", autoComplete: "given-name", name: "Email", required: true, fullWidth: true, id: "Email", label: "Email", autoFocus: true }),
            React.createElement(TextField_1["default"], { className: "textfield", autoComplete: "given-name", name: "passowrd", required: true, fullWidth: true, id: "passowrd", label: "Password", autoFocus: true }),
            React.createElement(TextField_1["default"], { className: "textfield", autoComplete: "given-name", name: "phone_number", required: true, fullWidth: true, id: "phone_number", label: "phone number", autoFocus: true }),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("button", { className: 'subbtn', type: 'submit' },
                React.createElement(react_1.Icon, { icon: "eva:person-done-outline", width: "25", height: "25" })))));
}
exports["default"] = SignUp;
