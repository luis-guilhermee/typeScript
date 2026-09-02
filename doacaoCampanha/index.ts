import readLine from "readline-sync";
import {Doacao} from "./src/models/Doacao.js";

const ObjLivro = new Doacao("Turma do senai", 20000);

console.log(ObjLivro.getTurma);
console.log(ObjLivro.getQuantidadeCasacos);

ObjLivro.setTurma = readLine.question("Digite o nome da turma:");
ObjLivro.setQuantidadeCasacos = readLine.questionInt("Digite o total de casacos:");

console.log(ObjLivro.getTurma);
console.log(ObjLivro.getQuantidadeCasacos);