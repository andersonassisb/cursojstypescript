import { Identity } from './interfaces/Identity';
import { ProductModel } from './interfaces/Product';

export class Product implements Identity, ProductModel {
  type: string;
  description: string;
  amount: number;
  available: boolean;

  constructor(
    private readonly id: string,
    type: string,
    description: string,
    amount: number,
    available: boolean,
  ) {
    this.type = type;
    this.description = description;
    this.amount = amount;
    this.available = available;
  }

  getId(): string {
    return this.id;
  }
}
