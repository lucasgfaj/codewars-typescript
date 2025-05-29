// Lucas Gontarz Fajardo, Lucas Eduardo Aurelio

export default class Recursivity {
  private str;

  constructor(str: string) {
    this.str = str;
  }

  public getStr(): string {
    return this.str;
  }

  public setStr(str: string): void {
    this.str = str;
  }

  public reverse(): string {
    return this.reverseAux(this.str)
  }

  private reverseAux1(str: string): string {
    if (str === '') return '';
    return this.reverseAux1(str.slice(1)) + str[0];
  }

  private reverseAux(str: string, i: number = 0, n: string = ''): string {

    if (i >= str.length) return n;

    n += str[str.length - i - 1];

    return this.reverseAux(str, i + 1, n);

  }

  private reverseAux3(str: string, i: number = 0): string {

    if (i >= length) return '';
    return str[length - i - 1] + this.reverseAux3(str, i + 1)
  }

  private revereseAux4(str: string, i: number = this.str.length - 1): string {
    if (i < 0) return '';
    return str[i] + this.revereseAux4(str, i - 1);
  }
}

