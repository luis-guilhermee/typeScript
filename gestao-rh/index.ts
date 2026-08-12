import readline from "readline-sync";
import { Funcionario } from "./src/models/Funcionario";

console.log("=== GESTAO RH (TYPESCRIPT) ===\n");

const nomeInput: string = readline.question("Digite seu nome: ");

console.log(`\nProcessando dados...\n`);

const funcionario = new Funcionario(nomeInput);

let valorSalario = readline.questionFloat("Digite o salário base: ");
funcionario.setSalario = valorSalario;

funcionario.aumentoSalarial(readline.questionFloat("Digite o aumento percentual: "));

funcionario.exibirRelatorio();