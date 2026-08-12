export class Jogador {
  // 1. Atributos tipados com modificadores clássicos
  private id: number;
  public nome: string = "";
  private nivel: number = 0;

  // 2. Construtor: O "Portão de Entrada" do objeto
  constructor() {
    this.id = Math.floor(Math.random() * 10000);
    this.nome = this.getNome;
    this.nivel = this.getNivel;
  }

  public get getNivel() {
    return this.nivel;
  }

  public get getNome() {
    return this.nome;
  }

  public set setNivel(nivel: number) {
    if (nivel <= 0) {
      this.nivel = 1;
      console.log(`\nDigite um nível acima de 0`);
      console.log(`Salvo como nível 1\n`);
    } else {
      this.nivel = nivel;
    }
  }

  public set setNome(nome: string) {
    if ((nome == "")) {
      this.nome = "Jogador 1";
      console.log(`\nDigite um nome válido`);
      console.log(`Salvo como: Jogador 1\n`);
    } else {
      this.nome = nome;
    }
  }

  public exibirRelatorio(): void {
    console.log("--- FICHA DO JOGADOR ---");
    console.log(`ID: ${this.id}`);
    console.log(`Nome: ${this.nome}`);
    console.log(`Nível: ${this.nivel}`);
    console.log("-------------------------");
  }
}
