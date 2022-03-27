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
var signInController_1 = require("../controllers/signInController");
var singleCourseModel_1 = require("../model/schema/singleCourseModel");
var groupCourseModel_1 = require("../model/schema/groupCourseModel");
function getSingleCourses() {
    return __awaiter(this, void 0, Promise, function () {
        var courses, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, singleCourseModel_1["default"].find({})];
                case 1:
                    courses = _a.sent();
                    console.log(courses);
                    return [2 /*return*/, courses];
                case 2:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/];
            }
        });
    });
}
router.post("/get-course-by-level", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var level, courses, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                level = req.body.level;
                console.log("hooooon");
                if (!level)
                    throw new Error("No data");
                return [4 /*yield*/, groupCourseModel_1["default"].find({ "level": level })];
            case 1:
                courses = _a.sent();
                if (courses) {
                    res.send({ "log": true, "courses": courses });
                    console.log(courses);
                }
                else {
                    res.send({ "log": false });
                    console.log("falsee");
                }
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                res.send({ err: err_2 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get('/get-all-single-courses', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var courses;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getSingleCourses()];
            case 1:
                courses = _a.sent();
                res.send({ courses: courses });
                return [2 /*return*/];
        }
    });
}); });
router.use(signInController_1.loginStatus);
router.post("/add-new-single-course", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, cost, participants, lessons, hours, newCourse, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, cost = _a.cost, participants = _a.participants, lessons = _a.lessons, hours = _a.hours;
                if (!name || !cost || !participants || !lessons || !hours)
                    throw new Error("No data");
                newCourse = new singleCourseModel_1["default"]({
                    name: name,
                    cost: cost,
                    participants: participants,
                    lessons: lessons,
                    hours: hours
                });
                return [4 /*yield*/, newCourse.save().then(function (res) {
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
function getGroupCourses() {
    return __awaiter(this, void 0, Promise, function () {
        var courses, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, groupCourseModel_1["default"].find({})];
                case 1:
                    courses = _a.sent();
                    console.log(courses);
                    return [2 /*return*/, courses];
                case 2:
                    err_4 = _a.sent();
                    console.error(err_4);
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/];
            }
        });
    });
}
router.get('/get-all-group-courses', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var courses;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getGroupCourses()];
            case 1:
                courses = _a.sent();
                res.send({ courses: courses });
                return [2 /*return*/];
        }
    });
}); });
router.use(signInController_1.loginStatus);
router.post("/add-new-group-course", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, cost, participants, lessons, hours, time, level, newCourse, err_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, cost = _a.cost, participants = _a.participants, lessons = _a.lessons, hours = _a.hours, time = _a.time, level = _a.level;
                if (!name || !cost || !participants || !lessons || !hours || !time || !level)
                    throw new Error("No data");
                newCourse = new groupCourseModel_1["default"]({
                    name: name,
                    cost: cost,
                    participants: participants,
                    lessons: lessons,
                    hours: hours,
                    time: time,
                    level: level
                });
                return [4 /*yield*/, newCourse.save().then(function (res) {
                        console.log(res);
                    })];
            case 1:
                _b.sent();
                res.send({ val: "OK" });
                return [3 /*break*/, 3];
            case 2:
                err_5 = _b.sent();
                res.send({ error: err_5.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
module.exports = router;
