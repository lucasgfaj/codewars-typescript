✅ Usando Array (estrutura nativa do JavaScript/TypeScript)
(1) Inserir e remover do início
array.unshift(element) → insere no início.

array.shift() → remove do início.

(2) Inserir e remover do final
array.push(element) → insere no final.

array.pop() → remove do final.

(3) Inserir e remover em qualquer posição
array.splice(index, 0, element) → insere na posição index.

array.splice(index, 1) → remove da posição index.

(4) Consultar o início, o final ou posição arbitrária
array[0] → início.

array[array.length - 1] → final.

array[index] → posição arbitrária.

⚠️ Desvantagem dos arrays: Inserir ou remover no início ou no meio pode ser ineficiente, pois os elementos seguintes precisam ser realocados (O(n)).

