export default class Balancing{
    private expressionString;

    public constructor(expressionString: string){
        this.expressionString = expressionString;
    }

    public getExpressionString(): string {
        return this.expressionString;
    }

    public setExpressionString(expressionString: string): void {
        this.expressionString = expressionString;
    }

    public isBalancing(): boolean {
        return false;
    }}