"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Recursivity_1 = __importDefault(require("./exercises/Recursivity"));
const message = new Recursivity_1.default();
console.log(message.message(3));
