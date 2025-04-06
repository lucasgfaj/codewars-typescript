// import DiagnosticActivity from "./algorithms/ diagnostic_activity";
// import FirstPrime from "./algorithms/first_prime";
// import SimpleInstruct from "./algorithms/simple-instruct";

import Clock from "./algorithms/Clock";

// const simpleInstructClass = new SimpleInstruct();

// console.log(simpleInstructClass.callName());
// console.log(simpleInstructClass.testIf());
// console.log(simpleInstructClass.testSwitch());
// console.log(simpleInstructClass.testFor());
// console.log(simpleInstructClass.matrizUnidimensional());
// console.log(simpleInstructClass.matrizBidimensional());
// console.log(simpleInstructClass.testWhile());
// console.log(simpleInstructClass.testDoWhile());

// const diagnostic_activity = new DiagnosticActivity();

// console.log(diagnostic_activity.multiple_next(5, 14));
// console.log(diagnostic_activity.check_validity(30042025));
// console.log(diagnostic_activity.isprimo(4));

// const primos = new FirstPrime(25);
// console.log(primos.primeirosPrimos());

const test1 = new Clock(8, 9, 5, 1);
console.log(test1.closestToMidnight());

const test2 = new Clock(0, 0, 0, 2);
console.log(test2.closestToMidnight());

const test3 = new Clock(2, 1, 6, 6);
console.log(test3.closestToMidnight());

const test4 = new Clock(1, 9, 5, 2);
console.log(test4.closestToMidnight());

const test5 = new Clock(3, 4, 5, 6);
console.log(test5.closestToMidnight());