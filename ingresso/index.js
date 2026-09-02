"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const Ingresso_js_1 = require("./src/models/Ingresso.js");
const ObjLivro = new Ingresso_js_1.Ingresso("Homem-Aranha: Um Novo Dia", 22);
console.log(ObjLivro.getFilme);
console.log(ObjLivro.getAssento);
ObjLivro.setFilme = readline_sync_1.default.question("Digite o nome do filme:");
ObjLivro.setAssento = readline_sync_1.default.questionInt("Digite o assento:");
console.log(ObjLivro.getFilme);
console.log(ObjLivro.getAssento);
