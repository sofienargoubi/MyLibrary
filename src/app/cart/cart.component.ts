import { Component, OnInit } from '@angular/core';
import {Books} from '../model/Books';
import {BooksService} from '../shards/books.service';
import {CartService} from '../shards/cart.service';
import {Cart} from '../model/Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {



  carts: Cart[] = [];
  constructor(private  cs: CartService) { }

  ngOnInit(): void {
    this.cs.getCart().subscribe((data: Cart[]) => {
      console.log(data);

      this.carts = data;
    });
  }

}
