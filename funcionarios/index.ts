import readLine from "readline-sync";
import {Funcionario} from "./src/models/Funcionario.js";

const ObjFuncionario = new Funcionario("Luis", 30000);

console.log(ObjFuncionario.getNome);
console.log(ObjFuncionario.getSalario);

ObjFuncionario.setNome = readLine.question("Digite o novo nome:");
ObjFuncionario.setSalario = readLine.questionFloat("Digite o salario:");

console.log(ObjFuncionario.getNome);
console.log(ObjFuncionario.getSalario);