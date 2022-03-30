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
var jwt_simple_1 = require("jwt-simple");
var userModel_1 = require("../model/schema/userModel");
//controller
var signInController_1 = require("../controllers/signInController");
router.get('/get-user', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, pass, user, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.query, email = _a.email, pass = _a.pass;
                if (!email || !pass)
                    throw "password or name is not correct";
                return [4 /*yield*/, userModel_1["default"].find({ "email": email, "password": pass })];
            case 1:
                user = _b.sent();
                if (user) {
                    res.coockie('userID', { id: user._id });
                    res.send({ "log": true, "user": user });
                }
                else {
                    res.send({ "log": false });
                }
                return [3 /*break*/, 3];
            case 2:
                err_1 = _b.sent();
                res.send({ err: err_1 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.post('/login', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, JWT_SECRET, encodedJWT, user, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, email = _a.email, password = _a.password;
                //check if user exist in DB
                //check if password equal to that in the database
                //if yes, send cookie with jwt
                console.log(req.body);
                if (!email || !password)
                    throw "password or name is not correct";
                JWT_SECRET = process.env.JWT_SECRET;
                encodedJWT = jwt_simple_1["default"].encode({ userEmail: email, role: "admin" }, JWT_SECRET);
                return [4 /*yield*/, userModel_1["default"].findOne({ email: email, password: password })];
            case 1:
                user = _b.sent();
                console.log({ user: user });
                if (user) {
                    // console.log("faaaat")
                    res.cookie("userInfo", encodedJWT, {
                        httpOnly: true,
                        maxAge: 60 * 60 * 1000
                    });
                    // res.coockie('userID',{id:user._id})
                    res.send({ "log": true, "user": user });
                }
                else {
                    res.send({ "log": false });
                }
                return [3 /*break*/, 3];
            case 2:
                err_2 = _b.sent();
                res.send({ err: err_2 });
                console.error(err_2.message);
                res.send({ error: err_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); })
    .get("/privateInfo", signInController_1.isAdmin, function (req, res) {
    res.send({ ok: true, info: "my secrets" });
});
router.post('/add-new-user', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, firstName, lastName, email, password, phoneNumber, existeduser, user, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, firstName = _a.firstName, lastName = _a.lastName, email = _a.email, password = _a.password, phoneNumber = _a.phoneNumber;
                if (!firstName || !lastName || !email || !password || !phoneNumber)
                    throw 'invalid field values';
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, userModel_1["default"].find({ "email": email })];
            case 2:
                existeduser = _b.sent();
                console.log(existeduser, "existed user");
                if (!existeduser === false) {
                    user = new userModel_1["default"]({ firstName: firstName, lastName: lastName, email: email, password: password, phoneNumber: phoneNumber });
                    console.log(user, "aaaaa");
                    user.save().then(function (res) {
                        console.log(res);
                    });
                    res.send({ val: "OK" });
                }
                else {
                    res.send("user already existes");
                }
                return [3 /*break*/, 4];
            case 3:
                err_3 = _b.sent();
                res.send({ err: err_3 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.patch("/update-user-password", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, _user, filter, update, doc, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                _a = req.body, email = _a.email, password = _a.password;
                if (!password || !email)
                    throw ' invalid fields';
                return [4 /*yield*/, userModel_1["default"].find({ "email": email })];
            case 1:
                _user = _b.sent();
                console.log(_user);
                if (!(_user != null)) return [3 /*break*/, 3];
                console.log('faaaaaaat');
                filter = { email: email };
                update = { password: password };
                return [4 /*yield*/, userModel_1["default"].findOneAndUpdate(filter, update)];
            case 2:
                doc = _b.sent();
                res.send({ ok: true, doc: doc });
                return [3 /*break*/, 4];
            case 3:
                res.send({ "false": false });
                _b.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_1 = _b.sent();
                res.send({ error: error_1.message });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
//   router.get("/get-users", async (req, res) => {});
module.exports = router;
