import Rodovias from "./exercises/Grafos/Rodovias";

let rodovias = new Rodovias();

rodovias.adiciona("a", "b");
rodovias.adiciona("a", "c");
rodovias.adiciona("b", "d");

console.log(rodovias.toString());
