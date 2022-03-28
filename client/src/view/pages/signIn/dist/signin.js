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
var Button_1 = require("@mui/material/Button");
var Login_1 = require("@mui/icons-material/Login");
var react_1 = require("react");
var LockOutlined_1 = require("@mui/icons-material/LockOutlined");
require("./signin.scss");
var Avatar_1 = require("@mui/material/Avatar");
var TextField_1 = require("@mui/material/TextField");
var Box_1 = require("@mui/material/Box");
var axios_1 = require("axios");
var react_router_dom_1 = require("react-router-dom");
var Typography_1 = require("@mui/material/Typography");
var Modal_1 = require("@mui/material/Modal");
var style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'rgba(255, 255, 255, 0.7)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};
//import Admin from '../admin/admin';
var clientId = "Your-Client-Id";
function SignIn() {
    var _a = react_1.useState(true), showloginButton = _a[0], setShowloginButton = _a[1];
    var _b = react_1.useState(false), showlogoutButton = _b[0], setShowlogoutButton = _b[1];
    var navigate = react_router_dom_1.useNavigate();
    var _c = react_1["default"].useState(false), open = _c[0], setOpen = _c[1];
    var handleOpen = function () { return setOpen(true); };
    var handleClose = function () { return setOpen(false); };
    var _d = react_1.useState(""), email = _d[0], setEmail = _d[1];
    var _e = react_1.useState(""), password = _e[0], setPassword = _e[1];
    var _f = react_1.useState(""), newPassword = _f[0], setNewPassword = _f[1];
    function hadleForgetPassword(ev) {
        console.log(email, '///');
        axios_1["default"].patch('/user/update-user-password', { email: email, password: newPassword });
        console.log(newPassword);
    }
    function handleSignIn(ev) {
        return __awaiter(this, void 0, void 0, function () {
            var form, email2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ev.preventDefault();
                        form = ev.target;
                        email2 = form[0].value;
                        return [4 /*yield*/, axios_1["default"].post('/user/login', { email: form[0].value, password: form[2].value })
                                .then(function (data) {
                                console.log({ email2: email2 });
                                console.log(data);
                                if (email2 === "Admin@gmail.com") {
                                    console.log("fat 3l if");
                                    navigate('/admincourses');
                                }
                                else {
                                    navigate('/homepage');
                                }
                            })["catch"](function (err) {
                                console.error(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    return (react_1["default"].createElement("div", { className: 'signin' },
        react_1["default"].createElement(Avatar_1["default"], { className: 'avatar' },
            react_1["default"].createElement(LockOutlined_1["default"], null)),
        react_1["default"].createElement("form", { className: 'loginform', onSubmit: handleSignIn },
            react_1["default"].createElement(TextField_1["default"], { className: "textfield", autoComplete: "given-name", name: "Email", required: true, fullWidth: true, id: "Email", label: "Email", autoFocus: true }),
            react_1["default"].createElement(TextField_1["default"], { className: "textfield", autoComplete: "given-name", name: "passowrd", required: true, fullWidth: true, id: "passowrd", label: "Password", autoFocus: true, type: "password" }),
            react_1["default"].createElement(Button_1["default"], { type: 'submit', className: 'loginbtn', size: "small", startIcon: react_1["default"].createElement(Login_1["default"], null) }, " login "),
            react_1["default"].createElement(Button_1["default"], { onClick: handleOpen, className: 'forgotbtn' }, "Forgot password?"),
            react_1["default"].createElement(Modal_1["default"], { open: open, onClose: handleClose, "aria-labelledby": "modal-modal-title", "aria-describedby": "modal-modal-description" },
                react_1["default"].createElement(Box_1["default"], { sx: style },
                    react_1["default"].createElement(Typography_1["default"], { id: "modal-modal-title", variant: "h6", component: "h2" }, "enter new password"),
                    react_1["default"].createElement(Typography_1["default"], { id: "modal-modal-description", sx: { mt: 2 } },
                        react_1["default"].createElement("div", { style: { display: 'flex', flexDirection: 'column' } },
                            react_1["default"].createElement(TextField_1["default"], { required: true, name: "email", label: "Email", variant: "standard", onChange: function (e) { return setEmail(e.target.value); } }),
                            react_1["default"].createElement(TextField_1["default"], { required: true, name: "password", label: "Password", variant: "standard", type: "password", onChange: function (e) { return setNewPassword(e.target.value); } }),
                            react_1["default"].createElement(Button_1["default"], { onClick: hadleForgetPassword }, "confirm"))))))));
}
exports["default"] = SignIn;
