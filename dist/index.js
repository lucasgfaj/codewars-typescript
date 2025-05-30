"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Project_1 = __importDefault(require("./Grafos/Project"));
const myProject = new Project_1.default();
myProject.addDependency(1, 2);
myProject.addDependency(2, 4);
myProject.addDependency(3, 4);
myProject.addDependency(4, 5);
console.log(myProject.isPossible());
myProject.addDependency(5, 2);
console.log(myProject.isPossible());
