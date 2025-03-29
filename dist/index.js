"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const simple_instruct_1 = __importDefault(require("./algorithms/simple-instruct"));
const simpleInstructClass = new simple_instruct_1.default();
console.log(simpleInstructClass.callName());
console.log(simpleInstructClass.testIf());
console.log(simpleInstructClass.testSwitch());
console.log(simpleInstructClass.testFor());
console.log(simpleInstructClass.matrizUnidimensional());
console.log(simpleInstructClass.matrizBidimensional());
console.log(simpleInstructClass.testWhile());
console.log(simpleInstructClass.testDoWhile());
