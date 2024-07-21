import { Camaro } from "./Camaro";
import { Fusca } from "../Fusca";
import { Fusion } from "./Fusion";
import { TesteCarro } from "./testeCarro";

const fusion = new Fusion(2020)
const camaro = new Camaro(2021)
const fusca = new Fusca(1970)

// fusion.acelerar()
// fusion.acelerar()
// fusion.acelerar()
// fusion.ligarTurbo()
// camaro.acelerar()
// camaro.acelerar()
// camaro.ligarTurbo()
// camaro.ligarTurbo()
// console.log(fusion.velocidade);
// console.log(camaro.velocidade);
// const testeFusion = new TesteCarro(fusion)
// testeFusion.testeTurbo()
// console.log(testeFusion)

fusca.acelerar()
fusca.ligarTurbo()

console.log(fusca.velocidade);
