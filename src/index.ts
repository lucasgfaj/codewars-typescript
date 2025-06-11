import { NetworkWithNode } from "./Grafos/NetworkWithNode";
import { Network } from "./Grafos/NetworkWithT";

const net = new NetworkWithNode();

net.addEdge('A', 'B');
net.addEdge('A', 'C');
net.addEdge('C', 'D');
net.addEdge('E', 'F');
net.addEdge('G', 'E');
net.addEdge('H', 'I');

console.log(net.getConnected('F'));