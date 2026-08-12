export class MaquinaCafe {
  // 1. Atributos tipados com modificadores clássicos
  private id: number;
  public modelo: string;
  private nivelAguaMl: number = 0;
  private nivelCafeGramas: number = 0;
  private aguaMl: number = 0;
  private cafeGramas: number = 0;

  // 2. Construtor: O "Portão de Entrada" do objeto
  constructor(modelo: string, nivelAguaMl: number, nivelCafeGramas: number) {
    this.id = Math.floor(Math.random() * 10000);
    this.modelo = modelo;
    this.nivelAguaMl = nivelAguaMl;
    this.nivelCafeGramas = nivelCafeGramas;
  }

  public get getNivelAgua() {
    return this.nivelAguaMl;
  }

  public get getNivelGramas() {
    return this.nivelCafeGramas;
  }

  public fazerCafe(nivelAguaMl: number, nivelCafeGramas: number, aguaMl: number, cafeGramas: number): void {
    this.nivelAguaMl -= aguaMl;
    this.nivelCafeGramas -= cafeGramas;
    if (0 >= this.nivelAguaMl || 0 >= this.nivelCafeGramas) {
      console.log("Precisa abastecer a máquina")
      this.nivelAguaMl = 0;
      this.nivelCafeGramas = 0;
    }
  }

  public exibirRelatorio(): void {
    console.log("--- FICHA DO ALUNO ---");
    console.log(`ID: ${this.id}`);
    console.log(`Nome: ${this.modelo}`);
    console.log(`Nível de água: ${this.nivelAguaMl}`);
    console.log(`Nível do café: ${this.nivelCafeGramas}`)
    console.log("----------------------");
  }
}
