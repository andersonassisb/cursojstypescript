import { CustomerModel } from './interfaces/Customer';
import { Identity } from './interfaces/Identity';

export class Customer implements Identity, CustomerModel {
  name: string;
  lastName: string;
  age: number;
  cpf: string;
  _email: string;
  _phone?: string | undefined;

  constructor(
    private readonly id: string,
    name: string,
    lastName: string,
    age: number,
    cpf: string,
    email: string,
    phone?: string | undefined,
  ) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.cpf = cpf;
    this._email = email;
    this._phone = phone;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  get phone(): string | undefined {
    return this._phone;
  }

  set phone(phone: string | undefined) {
    this._phone = phone;
  }
}
