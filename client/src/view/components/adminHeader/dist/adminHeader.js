"use strict";
exports.__esModule = true;
require("./adminHeader.scss");
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Menu_1 = require("@mui/material/Menu");
var MenuItem_1 = require("@mui/material/MenuItem");
var Person_1 = require("@mui/icons-material/Person");
var react_1 = require("@iconify/react");
function AdminHeader() {
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
            React.createElement(react_router_dom_1.Link, { to: "/data" },
                React.createElement(react_1.Icon, { icon: "fa-solid:users", width: "25", height: "25" })),
            React.createElement(react_router_dom_1.Link, { to: "/admincourses" },
                React.createElement(react_1.Icon, { icon: "carbon:data-vis-2", width: "25", height: "25" })),
            React.createElement(react_router_dom_1.Link, { to: "/addOffer" },
                React.createElement(react_1.Icon, { icon: "ic:outline-local-offer", width: "25", height: "25" })),
            React.createElement(react_router_dom_1.Link, { to: "/addTrainer" },
                React.createElement(react_1.Icon, { icon: "emojione-monotone:horse-racing", width: "25", height: "25" })),
            React.createElement(react_router_dom_1.Link, { to: "/addHorse" },
                React.createElement(react_1.Icon, { icon: "emojione-monotone:horse-face", width: "25", height: "25" }))),
        React.createElement("div", { className: "mainheader__right" },
            React.createElement(Person_1["default"], { id: "basic-button", "aria-controls": open ? 'basic-menu' : undefined, "aria-haspopup": "true", "aria-expanded": open ? 'true' : undefined, onClick: handleClick }, "  "),
            React.createElement(Menu_1["default"], { id: "basic-menu", anchorEl: anchorEl, open: open, onClose: handleClose, MenuListProps: {
                    'aria-labelledby': 'basic-button'
                } },
                React.createElement(MenuItem_1["default"], null,
                    "  ",
                    React.createElement(react_router_dom_1.Link, { to: "/SignIn" },
                        React.createElement(react_1.Icon, { icon: "clarity:logout-line", width: "25", height: "25" }))),
                React.createElement(MenuItem_1["default"], { onClick: handleClose1 },
                    React.createElement(react_1.Icon, { icon: "ci:off-close", width: "25", height: "25" })))))
    // </div>
    );
}
exports["default"] = AdminHeader;
