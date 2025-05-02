function enigmaSort(): void {
    const TAM = 10;
    const dados: number[] = [];

    // Gerar números aleatórios
    console.log("Enigma Sort");
    console.log("===========\n");

    console.log("Sequência Gerada");
    console.log("----------------");

    for (let i = 0; i < TAM; i++) {
        dados[i] = Math.floor(Math.random() * 100);
        process.stdout.write(dados[i].toString().padStart(3, ' '));
    }

    console.log("\n");

    // Embaralhar até ordenar
    let flag = false;
    do {
        // Shuffle aleatório
        for (let i = 0; i < TAM; i++) {
            const j = Math.floor(Math.random() * TAM);
            if (i !== j) {
                const temp = dados[i];
                dados[i] = dados[j];
                dados[j] = temp;
            }
        }

        // Verifica se está ordenado
        flag = true;
        for (let i = 1; i < TAM; i++) {
            if (dados[i] < dados[i - 1]) {
                flag = false;
                break;
            }
        }
    } while (!flag);

    console.log("Sequência Ordenada");
    console.log("------------------");

    for (let i = 0; i < TAM; i++) {
        process.stdout.write(dados[i].toString().padStart(3, ' '));
    }

    console.log("\n");
}

enigmaSort();
