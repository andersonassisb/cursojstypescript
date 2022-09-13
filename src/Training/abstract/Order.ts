export type OrderObject = Record<'id' | 'productId' | 'customerId', string>;

export abstract class AbstractOrder {
  constructor(protected readonly id: string) {}
  abstract getOrder(): OrderObject;
}
