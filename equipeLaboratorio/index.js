"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const Laboratorio_js_1 = require("./src/models/Laboratorio.js");
const ObjLivro = new Laboratorio_js_1.Laboratorio("Bancada 1", 32);
console.log(ObjLivro.getBancada);
console.log(ObjLivro.getNumeroMembros);
ObjLivro.setBancada = readline_sync_1.default.question("Digite o nome da bancada:");
ObjLivro.setNumeroMembros = readline_sync_1.default.questionInt("Digite o total de membros:");
console.log(ObjLivro.getBancada);
console.log(ObjLivro.getNumeroMembros);
