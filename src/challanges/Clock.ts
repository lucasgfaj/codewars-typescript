export default class Clock {

    private p1: number;
    private p2: number;
    private p3: number;
    private p4: number;

    constructor(p1: number, p2: number, p3: number, p4: number) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
        this.p4 = p4;
    }

    private findClosestTime(nums: number[]): string {
        let maxTime = -1; // Inicializa como -1 para garantir que qualquer hora seja válida como 0       
        let result = ""; // String para armazenar o resultado

        // Interage com todas as combinações possíveis de 4 dígitos para formar horas e minutos
        for (let i = 0; i < nums.length; i++) {

            for (let j = 0; j < nums.length; j++){

                if (i === j) continue; // Evita a utilização do mesmo dígito
                
                for (let k = 0; k < nums.length; k++) {
                    
                    if (k === i || k === j) continue; // Evita a utilização do mesmo dígito
                    
                    for (let l = 0; l < nums.length; l++) {
                       
                        if (l === i || l === j || l === k) continue; // Evita a utilização do mesmo dígito

                        let h = nums[i] * 10 + nums[j]; // Forma a hora
                        let m = nums[k] * 10 + nums[l]; // Forma os minutos

                        if (h < 24 && m < 60) { // Verifica se a hora e os minutos são válidos
                            let totalMinutes = h * 60 + m; // Converte a hora e os minutos para minutos totais
                            let target = 23 * 60 + 59; // 23:59 em minutos 

                            if (totalMinutes <= target && totalMinutes > maxTime) { // Verifica se a hora é válida e maior que a hora anterior
                                maxTime = totalMinutes; // Atualiza a hora mais próxima
                                result = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`; // Formata a hora e os minutos para o formato HH:MM
                                // o .padStart(2, '0') garante que sempre tenha dois dígitos no caso de ser menor que 10: Exemplo se é 5 vira 05
                                // o .toString() converte o número para string
                            }
                        }
                    }
                }
            }
            
        }
        return result || "Não é possível formar um horário válido";
    }

    public closestToMidnight(): string {
        const nums = [this.p1, this.p2, this.p3, this.p4]; // Cria um array com o valores fornecidos
        return this.findClosestTime(nums); // Chama a função para localizar a hora mais próxima de 00:00
    }
}