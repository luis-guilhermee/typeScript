import readLine from "readline-sync";
import {Instituicao} from "./src/models/Instituicao.js";

const ObjLivro = new Instituicao(124, 32);

console.log(ObjLivro.getCodigo);
console.log(ObjLivro.getTotalAlunos);

ObjLivro.setCodigo = readLine.questionInt("Digite o codigo da instituicao:");
ObjLivro.setTotalAlunos = readLine.questionInt("Digite o total de alunos:");

console.log(ObjLivro.getCodigo);
console.log(ObjLivro.getTotalAlunos);