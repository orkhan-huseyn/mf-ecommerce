import { mount as mountProductsTo } from 'products/ProductsIndex';
import { mount as mountCartTo } from 'cart/CartShow';

console.log('Container!');

mountProductsTo(document.querySelector('#dev-products'));
mountCartTo(document.querySelector('#dev-cart'));
