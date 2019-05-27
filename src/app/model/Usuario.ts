export class Usuario {

    constructor(nome: String) {
      this.nome = nome
    }
  
    nome: String = "";
    email: String = "";
    cpf: String;
    nascimento: Date;
    senha: String = "";
  }