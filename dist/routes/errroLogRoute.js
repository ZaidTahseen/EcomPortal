"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorLogController_1 = require("../controllers/errorLogController");
const express = require("express");
exports.errorLogRoute = express.Router();
exports.errorLogRoute.get('/', errorLogController_1.ErrorLogController.getErrorLog);
exports.errorLogRoute.post('/', errorLogController_1.ErrorLogController.saveError);
