"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateToken = (req, res, next) => {
    const headertToken = req.headers['authorization'];
    if (headertToken != undefined && headertToken.startsWith('Bearer ')) {
        //Tiene token
        try {
            const bearertoken = headertToken.slice(7);
            console.log(headertToken);
            jsonwebtoken_1.default.verify(bearertoken, process.env.SECRET_KEY || 'lio12');
            next();
        }
        catch (error) {
            res.status(401).json({
                msg: `Token no valido`
            });
        }
    }
    else {
        res.status(401).json({
            msg: 'El acceso esta denegado'
        });
    }
};
exports.default = validateToken;
