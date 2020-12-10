import { Component, OnInit } from '@angular/core';
import {Client} from '../model/client';
import {BooksService} from '../shards/books.service';
import {Books} from '../model/Books';
import {Cart} from '../model/Cart';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {



  books: Books[] = [];
  cart: Cart ;
  bookCart: Books ;
  constructor(private  bs: BooksService) { }

  ngOnInit(): void {
    this.bs.getBooks().subscribe((data: Books[]) => {
      console.log(data);

      this.books = data;
    });
  }
  addBk(nameText: string, descText: string) {

    const newBook: Books = {
      id: 1221,
      name: nameText,
      description: descText,
      prix: 230,
      quantity: 30,
      image: 'dqsd',
      status: 'dispo'

    };

    this.bs.addBook(newBook).subscribe();

    console.log(JSON.stringify(newBook));
  }

  addBkToCart(id: number) {

    this.bs.findbyId(id).subscribe((data: Books) => {
      this.bookCart = data ;
      console.log(data) ;
    });
    this.bs.findCartbyId(id).subscribe((data: Cart) => {
      this.cart = data;
    });
    console.log(this.cart);


    const newBookCart: Cart = {
        id : this.bookCart.id,
        idProduct: this.bookCart,
        quantity: 1,

      };

    if (this.cart.id === id){
      this.cart.quantity++;

      this.bs.updateCart(id, this.cart).subscribe();

   } else {
      this.bs.addBookToCart( newBookCart).subscribe();
    }

    }



}
