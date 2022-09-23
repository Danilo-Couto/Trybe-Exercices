"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const errorMidleware = (err, req, res, next) => {
    const { name, message, details } = err;
    console.log(`name: ${name}`);
    switch (name) {
        case 'ValidationError':
            res.status(400).json({ message: details[0].message });
            break;
        case 'NotFoundError':
            res.status(404).json({ message });
            break;
        case 'ConflictError':
            res.status(409).json({ message });
            break;
        default:
            console.error(err);
            res.sendStatus(500);
    }
    next();
};
exports.default = errorMidleware;
