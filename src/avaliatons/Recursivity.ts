// Lucas Gontarz Fajardo, Lucas Eduardo Aurelio

export default class Recursivity {
    private str: string;

    constructor(str: string){
        this.str = str;
    }

    public getStr(): string {
        return this.str;
    }

    public setStr(str: string): void {
        this.str = str;
    }

    public reverse(): string {
        return this.reverseAux(this.str);
    }

    private reverseAux(str: string): string {
        // Caso base: string vazia ou com 1 caractere
        if (str.length <= 1) {
            return str;
        }

        // Chamada recursiva: pega o último caractere e chama recursivamente com o restante
        return str.charAt(str.length - 1) + this.reverseAux(str.substring(0, str.length - 1));
    }
}
