import { v4 } from 'uuid';
import { Customer } from './Customer';
import { Order } from './Order';
import { Product } from './Product';

const customer = new Customer(
  v4(),
  'Anderson',
  'Barros',
  26,
  '15338898721',
  'customer@mail.com',
);
const product = new Product(v4(), 'smartphone', 'iPhone', 1, true);
const order = new Order(v4(), customer, product);

console.log(customer.cpf);
console.log(order.getOrder());
