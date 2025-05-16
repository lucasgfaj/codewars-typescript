import QuestionBank from "./exercises/QuestionBank";

const banco = new QuestionBank(["Acre", "Piauí", "Amapá", "Pará", "Bahia", "Ceará"]);
console.log(banco.newExam(0));    
console.log(banco.newExam(1));    
console.log(banco.newExam(-2));   

const banco1 = new QuestionBank( ["Acre", "Piauí"]);
console.log(banco1.newExam(-3));  
