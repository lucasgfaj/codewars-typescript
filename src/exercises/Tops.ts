// 📚 PILHA - Simulando uma pilha de pratos
class PilhaDePratos {
  private pilha: number[] = [];

  public adicionarPrato(prato: number): void {
    this.pilha.push(prato);  // Adiciona prato no topo da pilha
  }

  public retirarPrato(): number | undefined {
    return this.pilha.pop(); // Retira prato do topo
  }

  public mostrarPratos(): number[] {
    return this.pilha;
  }
}

// 🧑‍💼 FILA - Simulando uma fila de atendimento no banco
class FilaDeBanco {
  private fila: number[] = [];

  public adicionarCliente(cliente: number): void {
    this.fila.push(cliente); // Enfileira cliente
  }

  public atenderCliente(): number | undefined {
    return this.fila.shift(); // Atende o primeiro cliente
  }

  public mostrarFila(): number[] {
    return this.fila;
  }
}

// 📝 LISTA - Simulando uma lista de tarefas
class ListaDeTarefas {
  private lista: string[] = [];

  // Adiciona tarefa no final da lista
  public adicionarTarefa(tarefa: string): void {
    this.lista.push(tarefa); // Adiciona tarefa no final
  }

  // Remove tarefa em uma posição específica
  public removerTarefaPorPosicao(posicao: number): boolean {
    if (posicao < 0 || posicao >= this.lista.length) {
      console.log("Posição inválida");
      return false;
    }

    for (let i = 0; i < this.lista.length; i++) {
      if (i === posicao) {
        this.lista.splice(i, 1); // Remove tarefa da posição
        console.log(`Tarefa removida da posição ${posicao}`);
        return true;
      }
    }
    return false; // Caso não encontre, retorna false
  }

  // Consultar tarefa em uma posição específica
  public consultarTarefa(posicao: number): string | undefined {
    return this.lista[posicao]; // Retorna tarefa na posição
  }

  // Listar todas as tarefas
  public listarTarefas(): string[] {
    return this.lista;
  }
}

// EXEMPLO DE USO - Pilha, Fila e Lista

// 1. PILHA DE PRATOS
const pilha = new PilhaDePratos();
pilha.adicionarPrato(1);
pilha.adicionarPrato(2);
pilha.adicionarPrato(3);
console.log("Pilha de pratos:", pilha.mostrarPratos());

const pratoRetirado = pilha.retirarPrato();
console.log("Prato retirado:", pratoRetirado);
console.log("Pilha de pratos restante:", pilha.mostrarPratos());

// 2. FILA DE BANCO
const filaBanco = new FilaDeBanco();
filaBanco.adicionarCliente(101); // Cliente 101
filaBanco.adicionarCliente(102); // Cliente 102
filaBanco.adicionarCliente(103); // Cliente 103
console.log("Fila de banco:", filaBanco.mostrarFila());

const clienteAtendido = filaBanco.atenderCliente();
console.log("Cliente atendido:", clienteAtendido);
console.log("Fila de banco restante:", filaBanco.mostrarFila());

// 3. LISTA DE TAREFAS
const listaTarefas = new ListaDeTarefas();
listaTarefas.adicionarTarefa("Estudar TypeScript");
listaTarefas.adicionarTarefa("Ler um livro");
listaTarefas.adicionarTarefa("Fazer exercícios");
listaTarefas.adicionarTarefa("Organizar casa");

console.log("Lista de tarefas:", listaTarefas.listarTarefas());

// Remover tarefa da posição 3 (última tarefa)
listaTarefas.removerTarefaPorPosicao(3);

console.log("Tarefas após remoção:", listaTarefas.listarTarefas());

// Consultando a tarefa na posição 2 (segunda tarefa)
const tarefaConsultada = listaTarefas.consultarTarefa(2);
console.log("Tarefa na posição 2:", tarefaConsultada);