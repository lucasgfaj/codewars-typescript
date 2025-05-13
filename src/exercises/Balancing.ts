export default class Balancing {
    private expressionString: string;

    public constructor(expressionString: string) {
        this.expressionString = expressionString;
    }

    public getExpressionString(): string {
        return this.expressionString;
    }

    public setExpressionString(expressionString: string): void {
        this.expressionString = expressionString;
    }

    public isBalancing(): boolean {
        const stack: string[] = []; 

        for (let i = 0; i < this.expressionString.length; i++) {
            const char = this.expressionString[i];

            if (char === '{' || char === '[' || char === '(') {
                stack.push(char);
            }

            else if (char === '}' || char === ']' || char === ')') {
                const last = stack.pop(); 
                if (
                    (char === ')' && last !== '(') ||
                    (char === ']' && last !== '[') ||
                    (char === '}' && last !== '{')
                ) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}

/* 
🧱 O que é uma Pilha (Stack)?
Uma pilha é uma estrutura de dados linear onde os elementos são inseridos e removidos apenas no topo. Ela segue o princípio:

LIFO – Last In, First Out (o último a entrar é o primeiro a sair)

Pense em uma pilha de pratos:

Você coloca um prato em cima do outro (empilhar → push)

Você só consegue tirar o prato de cima (desempilhar → pop)
*/