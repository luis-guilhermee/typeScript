"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const Funcionario_js_1 = require("./src/models/Funcionario.js");
const ObjFuncionario = new Funcionario_js_1.Funcionario("Homem-Aranha", 160);
console.log(ObjFuncionario.getNome);
console.log(ObjFuncionario.getSalario);
ObjFuncionario.setNome = readline_sync_1.default.question("Digite o novo nome:");
ObjFuncionario.setSalario = readline_sync_1.default.questionFloat("Digite o salario:");
console.log(`Nome: ObjFuncionario.getNome`);
console.log(`Salario: ObjFuncionario.getSalario`);
