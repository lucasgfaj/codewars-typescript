export class CaxeiroViajante {
    private distancias: number[][];

    constructor(distancias: number[][]) {
        this.distancias = distancias;
    }

    public calcularMelhorRota(): { caminho: number[], custo: number } {

        const n = this.distancias.length;
        const cidades = Array.from({ length: n }, (_, i) => i);
        let minCusto = Infinity;
        let melhorCaminho: number[] = [];

        const permute = (arr: number[], l: number, r: number): void => {
            if (l === r) {
                const caminho = [0, ...arr, 0]; // Começa e termina na cidade 0
                let custo = 0;
                for (let i = 0; i < caminho.length - 1; i++) {
                    custo += this.distancias[caminho[i]][caminho[i + 1]];
                }
                if (custo < minCusto) {
                    minCusto = custo;
                    melhorCaminho = caminho;
                }
            } else {
                for (let i = l; i <= r; i++) {
                    [arr[l], arr[i]] = [arr[i], arr[l]]; // Troca
                    permute(arr, l + 1, r); // Chama recursivamente
                    [arr[l], arr[i]] = [arr[i], arr[l]]; // Desfaz a troca
                }
            }
        }
        permute(cidades.slice(1), 0, n - 2); // Começa a permutação a partir do índice 1
        return { caminho: melhorCaminho, custo: minCusto };
    }

}
