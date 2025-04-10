"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Recursivity {
    constructor() {
    }
    message(n) {
        if (n > 0)
            return `${n} \n` + this.message(n - 1);
        return "Fire!";
    }
}
exports.default = Recursivity;
