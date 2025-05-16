"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const QuestionBank_1 = __importDefault(require("./exercises/QuestionBank"));
const banco = new QuestionBank_1.default(["Acre", "Piauí", "Amapá", "Pará", "Bahia", "Ceará"]);
console.log(banco.newExam(0));
console.log(banco.newExam(1));
console.log(banco.newExam(-2));
const banco1 = new QuestionBank_1.default(["Acre", "Piauí"]);
console.log(banco1.newExam(-3));
