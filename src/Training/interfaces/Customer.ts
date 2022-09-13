export interface CustomerModel {
  name: string;
  lastName: string;
  age: number;
  cpf: string;
  email: string;
  phone?: string;
  getId(): string;
}
