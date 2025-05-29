// Lucas Gontarz Fajardo, Lucas Eduardo Aurelio
export default class Domino {
    private dominoArray: number[][] = [];

    public startGame(a: number, b: number): boolean {
        if (a == b) {
            this.dominoArray.push([a, b]);
            return true;
        }
        return false;
    }
    public addFirst(a: number, b: number): boolean {
        

        for(let i = 0; i < this.dominoArray.length; i++){
            if(a == this.dominoArray[i][0] && b == this.dominoArray[i][1] || b == this.dominoArray[i][0] && a == this.dominoArray[i][1]){
                return false;
            }
        }

        if (a == this.dominoArray[0][0]) {
            this.dominoArray.unshift([b, a]);
            return true;
        }
        if (b == this.dominoArray[0][0]) {
            this.dominoArray.unshift([a, b])
            return true;
        }
        return false;
    }

    public addLast(a: number, b: number): boolean {

        for(let i = 0; i < this.dominoArray.length; i++){
            if(a == this.dominoArray[i][0] && b == this.dominoArray[i][1] || b == this.dominoArray[i][0] && a == this.dominoArray[i][1]){
                return false;
            }
        }

        if (a == this.dominoArray[this.dominoArray.length -1][1]) {
            this.dominoArray.push([a, b]);
            return true;
        }
        if (b == this.dominoArray[this.dominoArray.length -1][1]) {
            this.dominoArray.push([b, a])
            return true;
        }
        return false;
    }
    public getTable(): string {
        let dominoString: string = '';

        for(let i = 0; i < this.dominoArray.length; i++){
            dominoString += `[${this.dominoArray[i][0]}:${this.dominoArray[i][1]}]`;
        }

        return dominoString;

    }


    // public getTable(): string {
    //     let dominoString: string = '';

    //     for(let i = 0; i < this.dominoArray.length; i++){
    //         dominoString += `[${this.dominoArray[0]}:${this.dominoArray[1]}]`;
    //     }

    //     return dominoString;

    // }



}