export class Funcionario {
  // 1. Atributos tipados com modificadores clássicos
  private id: number;
  public nome: string;
  private salario: number = 0;

  // 2. Construtor: O "Portão de Entrada" do objeto
  constructor(nome: string) {
    this.id = Math.floor(Math.random() * 10000);
    this.nome = nome;
    this.salario = this.getSalario;
  }

  public get getSalario() {
    return this.salario;
  }

  public set setSalario(valorSalario: number) {
    if (valorSalario < 820) {
      this.salario = 820;
    } else {
      this.salario = valorSalario;
    }
  }

  public aumentoSalarial(valor: number) {
    let valorAumento = this.salario*(valor/100);
    this.salario += valorAumento;
    }

  public exibirRelatorio(): void {
    console.log("--- FICHA DO ALUNO ---");
    console.log(`ID: ${this.id}`);
    console.log(`Nome: ${this.nome}`);
    console.log(`Salário atual: ${this.salario}`);
    console.log("----------------------");
  }
}
