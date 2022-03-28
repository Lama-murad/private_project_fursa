"use strict";
exports.__esModule = true;
require("./homepage.scss");
var React = require("react");
var Box_1 = require("@mui/material/Box");
var courses_1 = require("../courses/courses");
var hooks_1 = require("../../../app/hooks");
var react_1 = require("react");
var trainerReducer_1 = require("../../../features/trainerReducer");
var offers_1 = require("../../../features/offers");
var offers_2 = require("../../../features/offers");
var header_1 = require("../../components/header/header");
var react_2 = require("@iconify/react");
var Modal_1 = require("@mui/material/Modal");
var Typography_1 = require("@mui/material/Typography");
var style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'rgba(211, 184, 168,0.95)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};
function Homepage() {
    var _a = react_1.useState([]), courses = _a[0], setCourses = _a[1];
    var _b = react_1.useState([]), offer = _b[0], setOffers = _b[1];
    var offers = hooks_1.useAppSelector(offers_1.selectOffers);
    var trainers = hooks_1.useAppSelector(trainerReducer_1.selectrainers);
    var dispatch = hooks_1.useAppDispatch();
    var _c = React.useState(false), open = _c[0], setOpen = _c[1];
    var handleOpen = function () { return setOpen(true); };
    var handleClose = function () { return setOpen(false); };
    react_1.useEffect(function () {
        //fetch courses using mongo
        fetch('/offers/get-all-offers')
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            setOffers(data.offers);
        })["catch"](function (err) {
            console.error(err);
        });
    }, []);
    function handleGetOffers() {
        dispatch(offers_2.getOfferAsync());
    }
    return (React.createElement("div", { className: 'maindivHP' },
        React.createElement(header_1["default"], null),
        React.createElement("div", { className: 'animation' }, " "),
        React.createElement("div", { className: 'bodyDiv' },
            React.createElement(courses_1["default"], null),
            React.createElement("button", { className: 'offerBtn', onClick: handleOpen },
                React.createElement(react_2.Icon, { icon: "ooui:special-pages-ltr", width: "25", height: "25" })),
            React.createElement(Modal_1["default"], { open: open, onClose: handleClose, "aria-labelledby": "modal-modal-title", "aria-describedby": "modal-modal-description" },
                React.createElement(Box_1["default"], { sx: style }, offer.map(function (offer, index) { return (React.createElement(React.Fragment, null,
                    React.createElement(Typography_1["default"], { id: "keep-mounted-modal-title", variant: "h6", component: "h2", style: { fontWeight: "bold" } }, offer.name),
                    React.createElement(Typography_1["default"], { id: "keep-mounted-modal-description", sx: { mt: 2 } }, offer.description),
                    React.createElement(Typography_1["default"], { id: "keep-mounted-modal-description", sx: { mt: 2 } },
                        "cost: ",
                        offer.cost))); })))))
    //  <OffersCard key={index} name={offer.name} description={offer.description} cost={offer.cost}></OffersCard>
    //  <div className="offersCard">
    // <div className='txt'>
    //     {offer.name}
    //     <div>{offer.description}</div>
    // <div> cost: {offer.cost}</div>  
    // </div>
    // </div> 
    );
}
exports["default"] = Homepage;
