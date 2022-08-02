import { IFooCepAPI } from "./IFooCepAPI";

export default class MockFooCepAPI implements IFooCepAPI {
    async getAddressByCEP(cep: string, number: number): Promise<string> {
      return `O endereço para o "CEP:${cep}, n°:${number}" é "endereço foo"`;
    }
  
    async getCepByAddress(address: string, number: number): Promise<string> {
      return `O CEP para: "${address}, n°: ${number}" é "CEP baz"`;
    }
  }
