"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var main_dispatcher_1 = __importDefault(require("./dispatcher/main-dispatcher"));
var cors = require("cors");
var app = express();
app.use(cors());
app.use(main_dispatcher_1.default);
app.listen(3002, function () { return console.log("Server is listening at 3001"); });
