import { Customer } from './Customer';
import { Order } from './Order';
import { Product } from './Product';

const customer = new Customer('', 'Anderson', 'Barros', 26, '', '');
const product = new Product('', '', '', 1, true);
const order = new Order('', customer, product);

console.log(order);
