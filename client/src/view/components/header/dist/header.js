"use strict";
exports.__esModule = true;
require("./header.scss");
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Menu_1 = require("@mui/material/Menu");
var MenuItem_1 = require("@mui/material/MenuItem");
var Home_1 = require("@mui/icons-material/Home");
var HowToReg_1 = require("@mui/icons-material/HowToReg");
var Person_1 = require("@mui/icons-material/Person");
var react_1 = require("@iconify/react");
function Header() {
    var _a = React.useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var open = Boolean(anchorEl);
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
        React.createElement(react_router_dom_1.Link, { to: '/' });
    };
    var handleClose1 = function () {
        setAnchorEl(null);
    };
    return (React.createElement("div", { className: "mainheader" },
        React.createElement("div", { className: "mainheader__left" },
            React.createElement(react_router_dom_1.Link, { to: "/homepage" },
                React.createElement(Home_1["default"], null)),
            React.createElement(react_router_dom_1.Link, { to: "/choosecourse" },
                React.createElement(HowToReg_1["default"], null)),
            React.createElement(react_router_dom_1.Link, { to: "/horses" },
                React.createElement(react_1.Icon, { icon: "mdi:horse" })),
            React.createElement(react_router_dom_1.Link, { to: "/trainers" }, "Our trainers")),
        React.createElement("div", { className: "mainheader__right" },
            React.createElement(Person_1["default"], { id: "basic-button", "aria-controls": open ? 'basic-menu' : undefined, "aria-haspopup": "true", "aria-expanded": open ? 'true' : undefined, onClick: handleClick }, "  "),
            React.createElement(Menu_1["default"], { id: "basic-menu", anchorEl: anchorEl, open: open, onClose: handleClose, MenuListProps: {
                    'aria-labelledby': 'basic-button'
                } },
                React.createElement(MenuItem_1["default"], null,
                    "  ",
                    React.createElement(react_router_dom_1.Link, { to: "/SignIn" }, " Logout")),
                React.createElement(MenuItem_1["default"], { onClick: handleClose1 }, "Close"))))
    // </div>
    );
}
exports["default"] = Header;
