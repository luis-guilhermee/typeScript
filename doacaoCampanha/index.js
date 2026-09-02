"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const Doacao_js_1 = require("./src/models/Doacao.js");
const ObjLivro = new Doacao_js_1.Doacao("Turma do senai", 20000);
console.log(ObjLivro.getTurma);
console.log(ObjLivro.getQuantidadeCasacos);
ObjLivro.setTurma = readline_sync_1.default.question("Digite o nome da turma:");
ObjLivro.setQuantidadeCasacos = readline_sync_1.default.questionInt("Digite o total de casacos:");
console.log(ObjLivro.getTurma);
console.log(ObjLivro.getQuantidadeCasacos);
