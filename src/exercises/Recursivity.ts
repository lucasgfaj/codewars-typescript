export default class Recursivity {
    
    constructor(){

    }

    public message(n: number): string{
        if(n > 0) return `${n} \n` + this.message(n -1);  
        return "Fire!";
    }
}