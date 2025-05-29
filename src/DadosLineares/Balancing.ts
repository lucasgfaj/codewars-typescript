export default class Balancing {
    // Atributo privado que armazena a expressão matemática como string
    private expressionString: string;

    // Construtor que recebe a expressão e armazena no atributo da classe
    public constructor(expressionString: string) {
        this.expressionString = expressionString;
    }

    // Getter: retorna a expressão armazenada
    public getExpressionString(): string {
        return this.expressionString;
    }

    // Setter: permite atualizar a expressão armazenada
    public setExpressionString(expressionString: string): void {
        this.expressionString = expressionString;
    }

    // Método principal que verifica se a expressão está balanceada
    public isBalancing(): boolean {
        const stack: string[] = []; // Inicializa uma pilha vazia (array de strings)

        // Percorre cada caractere da expressão
        for (let i = 0; i < this.expressionString.length; i++) {
            const char = this.expressionString[i]; // Pega o caractere atual

            // Se for um símbolo de abertura, empilha
            if (char === '{' || char === '[' || char === '(') {
                stack.push(char);
            }

            // Se for um símbolo de fechamento, verifica se casa com o topo da pilha
            else if (char === '}' || char === ']' || char === ')') {
                const last = stack.pop(); // Remove o último símbolo de abertura

                // Se não houver correspondência adequada, retorna falso
                if (
                    (char === ')' && last !== '(') ||
                    (char === ']' && last !== '[') ||
                    (char === '}' && last !== '{')
                ) {
                    return false; // Desbalanceado
                }
            }
        }

        // Se ao final da leitura a pilha estiver vazia, a expressão está balanceada
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