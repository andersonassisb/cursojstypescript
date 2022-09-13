import { CustomerModel } from './interfaces/Customer';
import { AbstractOrder, OrderObject } from './abstract/Order';
import { ProductModel } from './interfaces/Product';

export class Order extends AbstractOrder {
  private amount = 0;

  constructor(
    readonly id: string,
    private readonly customer: CustomerModel,
    private readonly product: ProductModel,
  ) {
    super(id);
  }

  getOrder(): OrderObject {
    return {
      id: this.id,
      productId: this.product.getId(),
      customerId: this.customer.getId(),
    };
  }

  getAmount(): number {
    return this.amount;
  }
}
