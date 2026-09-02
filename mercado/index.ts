import readline from "readline-sync";
import { Produto } from "./src/models/Produto.js";

const ObjProduto = new Produto("Laranja", 4);

console.log(ObjProduto.getNome)
console.log(ObjProduto.getPreco)

ObjProduto.setNome = readline.question("Digite o novo nome: ")
ObjProduto.setPreco = readline.questionFloat("Digite o novo preço: ")

console.log(ObjProduto.getNome)
console.log(ObjProduto.getPreco)