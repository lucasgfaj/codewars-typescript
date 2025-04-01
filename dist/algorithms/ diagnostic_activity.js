"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    constructor() {
    }
    multiple_next(a, b) {
        // Divide b por a e arredonda para cima
        let c = Math.ceil(b / a);
        // Multiplica o resultado por a para obter o próximo múltiplo  
        let d = c * a;
        // Retorna o próximo múltiplo
        console.log("Primeiro multiplo de " + a + " maior que " + b + " é: " + d);
    }
    check_validity(dateVal) {
        let dateToday = 31032025;
        let dia = Math.floor(dateToday / 1000000);
        let mes = Math.floor((dateToday / 10000) % 100);
        let ano = dateToday % 10000;
        let diaVal = Math.floor(dateVal / 1000000);
        let mesVal = Math.floor((dateVal / 10000) % 100);
        let anoVal = dateVal % 10000;
        console.log("Data de hoje: " + dia + "/" + mes + "/" + ano);
        console.log("Data de validade: " + diaVal + "/" + mesVal + "/" + anoVal);
        if (ano > anoVal || (ano == anoVal && mes > mesVal) ||
            (ano == anoVal && mes == mesVal && dia > diaVal)) {
            return "O produto está vencido!";
        }
        if (dia == diaVal && mes == mesVal && ano == anoVal) {
            return "Data de validade é hoje";
        }
        return "A data de validade está OK";
    }
    isprimo(n) {
        if (n <= 1) {
            return `${n} não é primo`;
        }
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                return `${n} não é primo`;
            }
        }
        return `${n} é primo`;
    }
}
exports.default = default_1;
