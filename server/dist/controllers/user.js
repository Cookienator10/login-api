"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.newUser = void 0;
const newUser = (req, res) => {
    console.log(req.body);
    res.json({
        msg: 'New user',
        body: req.body
    });
};
exports.newUser = newUser;
const loginUser = (req, res) => {
    console.log(req.body);
    res.json({
        msg: 'Login user',
        body: req.body
    });
};
exports.loginUser = loginUser;
