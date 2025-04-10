export default class SimpleInstruct {

   public constructor(){

    }

    
    public callName(): string {
      let name: string = "Lucas";
      let age: number = 20;

      return `Name: ${name}, Age: ${age}`;
    }

    public testIf(): string {
        let name: string = "Lucas";
        let age: number = 20;

        if (age > 18){
            return `Name: ${name}, Age: ${age} is an adult`;
        }
        else {
            return `Name: ${name}, Age: ${age} is a minor`;
        }
    }

    public testSwitch(): string {
        let name: string = "Lucas";
        let age: number = 12;
        let status: string = "minor";

        switch (status) {
            case "adult":
                return `Name: ${name}, Age: ${age} is an adult`;
            case "minor":
                return `Name: ${name}, Age: ${age} is a minor`;
            default:
                return `Name: ${name}, Age: ${age} is unknown`;
        }
    }

    public testFor(): number {
        let mounth: number = 12;
        let result: number = 0;
        let salary: number = 400;

        for (let i = 0; i < mounth; i++){
           result += salary;
        }

        return result;
    }

    public testWhile(): number {
        let mounth: number = 13;
        let result: number = 0;
        let salary: number = 586;
        let i: number = 0;

        while (i < mounth){
            result += salary;
            i++;
        }

        return result;
    }

    public testDoWhile(): number {
        let mounth: number = 13;
        let result: number = 0;
        let salary: number = 586;
        let i: number = 0;

        do {
            result += salary;
            i++;
        } while (i < mounth);

        return result;
    }

    public matrizUnidimensional(): number[] {
        let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
     
        for (let i = 0; i < array.length; i++){
            console.log(array[i]);
        }

        return array;
    }

    public matrizBidimensional(): number[][] {

        let array: number[][] = [
            [1, 2, 3],
            [4, 5, 6],
        ]

        for(let i = 0; i < array.length; ++i){
            for(let j = 0; j < array[i].length; ++j){
                console.log(array[i][j]);
            }
        }

        return array;


    }

}