"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimpleInstruct {
    constructor() {
    }
    callName() {
        let name = "Lucas";
        let age = 20;
        return `Name: ${name}, Age: ${age}`;
    }
    testIf() {
        let name = "Lucas";
        let age = 20;
        if (age > 18) {
            return `Name: ${name}, Age: ${age} is an adult`;
        }
        else {
            return `Name: ${name}, Age: ${age} is a minor`;
        }
    }
    testSwitch() {
        let name = "Lucas";
        let age = 12;
        let status = "minor";
        switch (status) {
            case "adult":
                return `Name: ${name}, Age: ${age} is an adult`;
            case "minor":
                return `Name: ${name}, Age: ${age} is a minor`;
            default:
                return `Name: ${name}, Age: ${age} is unknown`;
        }
    }
    testFor() {
        let mounth = 12;
        let result = 0;
        let salary = 400;
        for (let i = 0; i < mounth; i++) {
            result += salary;
        }
        return result;
    }
    testWhile() {
        let mounth = 13;
        let result = 0;
        let salary = 586;
        let i = 0;
        while (i < mounth) {
            result += salary;
            i++;
        }
        return result;
    }
    testDoWhile() {
        let mounth = 13;
        let result = 0;
        let salary = 586;
        let i = 0;
        do {
            result += salary;
            i++;
        } while (i < mounth);
        return result;
    }
    matrizUnidimensional() {
        let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
        return array;
    }
    matrizBidimensional() {
        let array = [
            [1, 2, 3],
            [4, 5, 6],
        ];
        for (let i = 0; i < array.length; ++i) {
            for (let j = 0; j < array[i].length; ++j) {
                console.log(array[i][j]);
            }
        }
        return array;
    }
}
exports.default = SimpleInstruct;
