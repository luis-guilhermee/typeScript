"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const Instituicao_js_1 = require("./src/models/Instituicao.js");
const ObjLivro = new Instituicao_js_1.Instituicao(124, 32);
console.log(ObjLivro.getCodigo);
console.log(ObjLivro.getTotalAlunos);
ObjLivro.setCodigo = readline_sync_1.default.questionInt("Digite o codigo da instituicao:");
ObjLivro.setTotalAlunos = readline_sync_1.default.questionInt("Digite ao total de alunos:");
console.log(ObjLivro.getCodigo);
console.log(ObjLivro.getTotalAlunos);
