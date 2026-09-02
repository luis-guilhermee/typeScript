import readLine from "readline-sync";
import {Ingresso} from "./src/models/Ingresso.js";

const ObjLivro = new Ingresso("Homem-Aranha: Um Novo Dia", 22);

console.log(ObjLivro.getFilme);
console.log(ObjLivro.getAssento);

ObjLivro.setFilme = readLine.question("Digite o nome do filme:");
ObjLivro.setAssento = readLine.questionInt("Digite o assento:");

console.log(ObjLivro.getFilme);
console.log(ObjLivro.getAssento);