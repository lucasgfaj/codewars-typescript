"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Rodovias_1 = __importDefault(require("./exercises/Grafos/Rodovias"));
let rodovias = new Rodovias_1.default();
rodovias.adiciona("a", "b");
rodovias.adiciona("a", "c");
rodovias.adiciona("b", "d");
console.log(rodovias.toString());
