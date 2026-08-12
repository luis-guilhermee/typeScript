export class Aluno {
  // 1. Atributos tipados com modificadores clássicos
  private id: number;
  public nome: string;
  private matricula: string;
  #notaFinal: number = 0;
  // 2. Construtor: O "Portão de Entrada" do objeto
  constructor(nome: string, matricula: string) {
    this.id = Math.floor(Math.random() * 10000);
    this.nome = nome;
    this.matricula = matricula;
  }

  public get getNotaFinal() {
    return this.#notaFinal
  }

  public set setNotaFinal(valor: number) {
    if (valor > 0 && valor <= 20) {
      this.#notaFinal = valor
    } else {
      console.log("Valor inválido")
    }
  }

  public verficicarAprovacao(): string {
    return this.#notaFinal >= 10 ? "Aprovado" : "Reprovado";
  }

  public exibirRelatorio(): void {
    console.log("--- FICHA DO ALUNO ---");
    console.log(`ID: ${this.id}`);
    console.log(`Nome: ${this.nome}`);
    console.log(`Matricula: ${this.matricula}`);
    console.log(`Status: ${this.verficicarAprovacao()}`)
    console.log("----------------------");
  }
}
