import {Books} from './Books';
import {Client} from './client';

export class Cart {

  id: number;
  idProduct: Books;
  quantity: number;



  // tslint:disable-next-line:max-line-length
  constructor(id: number, idProduct: Books, quantity: number) {
    this.id = id;
    this.idProduct = idProduct;
    this.quantity = quantity;

  }
}
