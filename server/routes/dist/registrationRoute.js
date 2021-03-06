"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var registrationModel_1 = require("../model/schema/registrationModel");
var singleCourseRegModel_1 = require("../model/schema/singleCourseRegModel");
var groupCourseModel_1 = require("../model/schema/groupCourseModel");
function getRegistrations() {
    return __awaiter(this, void 0, Promise, function () {
        var registrations, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, registrationModel_1["default"].find({})];
                case 1:
                    registrations = _a.sent();
                    console.log(registrations);
                    return [2 /*return*/, registrations];
                case 2:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/];
            }
        });
    });
}
router.get('/get-all-registrations', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var registrations;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getRegistrations()];
            case 1:
                registrations = _a.sent();
                res.send({ registrations: registrations });
                return [2 /*return*/];
        }
    });
}); });
router.post("/add-new-registration", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, level, name, age, course, courseTime, courseName, filter, updatedAvailable, update, newRegis, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, level = _a.level, name = _a.name, age = _a.age, course = _a.course, courseTime = _a.courseTime;
                if (!level || !name || !age || !course || !courseTime)
                    throw new Error("No data");
                return [4 /*yield*/, groupCourseModel_1["default"].find({ "name": course })];
            case 1:
                courseName = _b.sent();
                console.log(courseName, "aaaaaaaaaaa");
                if (!courseName) return [3 /*break*/, 3];
                console.log;
                filter = { name: courseName[0].name };
                updatedAvailable = (courseName[0].availableSpaces) - 1;
                console.log(updatedAvailable, "aavailableeeeeeeeee");
                update = { availableSpaces: updatedAvailable };
                console.log(update, "updateee");
                groupCourseModel_1["default"].findOneAndUpdate(filter, update);
                newRegis = new registrationModel_1["default"]({
                    level: level,
                    name: name,
                    age: age,
                    course: course,
                    courseTime: courseTime
                });
                return [4 /*yield*/, newRegis.save().then(function (res) {
                        console.log(res);
                    })];
            case 2:
                _b.sent();
                res.send({ val: "OK" });
                _b.label = 3;
            case 3: return [3 /*break*/, 5];
            case 4:
                err_2 = _b.sent();
                res.send({ error: err_2.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
router.post("/add-new-single-registration", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, level, name, age, date, horse, trainer, newRegis, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                console.log("fat 3la add new 46");
                _a = req.body, level = _a.level, name = _a.name, age = _a.age, date = _a.date, horse = _a.horse, trainer = _a.trainer;
                if (!level || !name || !age || !date || !horse || !trainer)
                    throw new Error("No data");
                newRegis = new singleCourseRegModel_1["default"]({
                    level: level,
                    name: name,
                    age: age,
                    date: date,
                    horse: horse,
                    trainer: trainer
                });
                return [4 /*yield*/, newRegis.save().then(function (res) {
                        console.log("yessssssssss");
                        console.log(res);
                    })];
            case 1:
                _b.sent();
                res.send({ val: "OK" });
                return [3 /*break*/, 3];
            case 2:
                err_3 = _b.sent();
                res.send({ error: err_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
module.exports = router;
