"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const Jogo_js_1 = require("./src/models/Jogo.js");
const ObjLivro = new Jogo_js_1.Jogo("Homem-Aranha", 160);
console.log(ObjLivro.getTitulo);
console.log(ObjLivro.getPreco);
ObjLivro.setTitulo = readline_sync_1.default.question("Digite o novo titulo:");
ObjLivro.setPreco = readline_sync_1.default.questionFloat("Digite o preco:");
console.log(ObjLivro.getTitulo);
console.log(ObjLivro.getPreco);
