"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controller/user.controller"));
const user_middleware_1 = __importDefault(require("../middlewares/user.middleware"));
const router = (0, express_1.Router)();
const userControler = new user_controller_1.default();
router.get('/users', userControler.getAll);
router.get('/users/:id', userControler.getById);
router.post('/users/', user_middleware_1.default, userControler.create);
router.put('/users/:id', user_middleware_1.default, userControler.update);
router.delete('/users/:id', userControler.remove);
exports.default = router;
