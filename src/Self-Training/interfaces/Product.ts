export interface ProductModel {
  type: string;
  description: string;
  amount: number;
  available: boolean;
  getId(): string;
}
