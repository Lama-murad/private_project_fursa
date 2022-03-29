"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var counterSlice_1 = require("../features/counter/counterSlice");
//import treatmentReducer from '../features/treatment/treatmentSlice';
var registrationSlice_1 = require("../features/registrationSlice");
var products_1 = require("../features/products");
var trainerReducer_1 = require("../features/trainerReducer");
var offers_1 = require("../features/offers");
var userReducer_1 = require("../features/userReducer");
exports.store = toolkit_1.configureStore({
    reducer: {
        registrations: registrationSlice_1["default"],
        counter: counterSlice_1["default"],
        products: products_1["default"],
        offers: offers_1["default"],
        trainers: trainerReducer_1["default"],
        user: userReducer_1["default"]
    }
});
