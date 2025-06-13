import { Network } from "./Grafos/NetworkWithT";

const net = new Network();

net.add('A', 'B');
net.add('A', 'C');
net.add('C', 'D');
net.add('E', 'F');
net.add('G', 'E');
net.add('H', 'I');

console.log(net.getConnected('A'));
console.log(net.getNotConnected('A'));
