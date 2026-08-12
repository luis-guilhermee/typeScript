import readline from "readline-sync";
import { Jogador } from "./src/models/Jogador";

console.log("=== JOGO (TYPESCRIPT) ===\n");

const jogador = new Jogador();

let nome = readline.question("Digite seu nome: ");
jogador.setNome = nome;

let nivel = readline.questionFloat("Digite seu nível: ");
jogador.setNivel = nivel;

jogador.exibirRelatorio();