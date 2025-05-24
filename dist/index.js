"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Grafo_1 = __importDefault(require("./exercises/Grafos/Grafo"));
// Criando o grafo
const grafo = new Grafo_1.default();
// Adicionando vértices
grafo.adicionarVertice("A");
grafo.adicionarVertice("B");
grafo.adicionarVertice("C");
// Adicionando arestas
grafo.adicionarAresta("A", "B");
grafo.adicionarAresta("A", "C");
// Exibindo o grafo
grafo.exibirGrafo();
