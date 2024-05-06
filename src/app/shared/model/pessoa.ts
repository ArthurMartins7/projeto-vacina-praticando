import { Pais } from "./pais";

export interface Pessoa {
media: any;

  idPessoa: number;
	nome: string;
	dataNascimento: Date;
	sexo: string;
	cpf: string;
	tipoDePessoa: number;
  pais: Pais;

}
