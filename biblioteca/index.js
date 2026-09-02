import readLine from "readline-sync";
import { Livro } from "./src/models/Livro.js";
const ObjLivro = new Livro("Laranja", 4);
console.log(ObjLivro.getTitulo);
console.log(ObjLivro.getPaginas);
ObjLivro.setTitulo = readLine.question("Digite o novo titulo:");
ObjLivro.setPaginas = readLine.questionFloat("Digite as paginas:");
console.log(ObjLivro.getTitulo);
console.log(ObjLivro.getPaginas);
