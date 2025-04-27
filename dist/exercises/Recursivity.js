"use strict";
// Lucas Gontarz Fajardo, Lucas Eduardo Aurelio
Object.defineProperty(exports, "__esModule", { value: true });
class Recursivity {
    constructor(str) {
        this.str = str;
    }
    getStr() {
        return this.str;
    }
    setStr(str) {
        this.str = str;
    }
    reverse() {
        return this.reverseAux(this.str);
    }
    reverseAux1(str) {
        if (str === '')
            return '';
        return this.reverseAux1(str.slice(1)) + str[0];
    }
    reverseAux(str, i = 0, n = '') {
        if (i >= str.length)
            return n;
        n += str[str.length - i - 1];
        return this.reverseAux(str, i + 1, n);
    }
    reverseAux3(str, i = 0) {
        if (i >= length)
            return '';
        return str[length - i - 1] + this.reverseAux3(str, i + 1);
    }
    revereseAux4(str, i = this.str.length - 1) {
        if (i < 0)
            return '';
        return str[i] + this.revereseAux4(str, i - 1);
    }
}
exports.default = Recursivity;
