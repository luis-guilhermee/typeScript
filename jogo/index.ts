import readLine from "readline-sync";
import {Jogo} from "./src/models/Jogo.js";

const ObjLivro = new Jogo("Marvel's Spider-Man", 200);

console.log(ObjLivro.getTitulo);
console.log(ObjLivro.getPreco);

ObjLivro.setTitulo = readLine.question("Digite o novo titulo:");
ObjLivro.setPreco = readLine.questionFloat("Digite o preco:");

console.log(ObjLivro.getTitulo);
console.log(ObjLivro.getPreco);