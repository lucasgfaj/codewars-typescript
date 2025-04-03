import DiagnosticActivity from "./algorithms/ diagnostic_activity";
import FirstPrime from "./algorithms/first_prime";
// import SimpleInstruct from "./algorithms/simple-instruct";

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

const primos = new FirstPrime(25);
console.log(primos.primeirosPrimos());