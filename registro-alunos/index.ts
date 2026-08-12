import readline from "readline-sync";
import { Aluno } from "./src/models/Aluno";

console.log("=== REGISTRO ALUNOS (TYPESCRIPT) ===\n");

const nomeInput: string = readline.question("Nome do aluno: ");
const matriculaInput: string = readline.question("Matrícula: ");

const aluno = new Aluno(nomeInput, matriculaInput);

aluno.setNotaFinal = readline.questionInt("Qual foi sua nota final? ");

console.log(`\nProcessando dados...\n`);


aluno.exibirRelatorio();