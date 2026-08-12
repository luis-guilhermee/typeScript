import readline from "readline-sync";
import { MaquinaCafe } from "./src/models/MaquinaCafe";

console.log("=== MÁQUINA DE CAFÉ INTELIGENTE (TYPESCRIPT) ===\n");

const modeloInput: string = readline.question(
  "Digite o modelo da máquina de café: ",
);
const nivelAguaMlInput: number = Number(
  readline.question("Digite o nível de água para abastecer (em ml): "),
);
const nivelCafeGramasInput: number = Number(
  readline.question("Digite o quanto de café para abastecer (em gramas): "),
);

if (nivelAguaMlInput <= 0 || nivelCafeGramasInput <= 0) {
  console.log("Inválido");
}

console.log(`\nProcessando dados...\n`);

const maquinaCafe = new MaquinaCafe(
  modeloInput,
  nivelAguaMlInput,
  nivelCafeGramasInput,
);

let agua = maquinaCafe.getNivelAgua;
let cafe = maquinaCafe.getNivelGramas;

while (agua > 0 && cafe > 0) {
  const aguaMlInput: number = Number(
    readline.question("Digite quanto de água vai utilizar em seu café: "),
  );
  const cafeGramasInput: number = Number(
    readline.question("Digite quanto de café vai utilizar: "),
  );

  maquinaCafe.fazerCafe(
    nivelAguaMlInput,
    nivelCafeGramasInput,
    aguaMlInput,
    cafeGramasInput,
  );

  agua = maquinaCafe.getNivelAgua;
  cafe = maquinaCafe.getNivelGramas;

  maquinaCafe.exibirRelatorio();
}