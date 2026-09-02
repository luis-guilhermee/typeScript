import readLine from "readline-sync";
import {Laboratorio} from "./src/models/Laboratorio.js";

const ObjLivro = new Laboratorio("Bancada 1", 32);

console.log(ObjLivro.getBancada);
console.log(ObjLivro.getNumeroMembros);

ObjLivro.setBancada = readLine.question("Digite o nome da bancada:");
ObjLivro.setNumeroMembros = readLine.questionInt("Digite o total de membros:");

console.log(ObjLivro.getBancada);
console.log(ObjLivro.getNumeroMembros);