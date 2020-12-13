import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { element } from 'protractor';
import { StringifyOptions } from 'querystring';
import { Books } from '../model/Books';
import { Client } from '../model/client';
import { Wishlist } from '../model/Wishlist';
import { BooksService } from '../shards/books.service';
import { WishlistService } from '../shards/wishlist.service';

@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.css']
})
export class BooksViewComponent implements OnInit {

  bookwish : Books;
  category : string = "?";
  place : string = "?";
  serach : string;
  p: number = 1;
  books: Books[] = [];
 idLibrary : string;
 arrBirds : string;
 client : Client;
  constructor(private  bs: BooksService,private route: ActivatedRoute,private router: Router,private ws:WishlistService) { }

  ngOnInit(): void {
   
    this.route.params.subscribe(params => {
    
      this.idLibrary=params['idLibrary'];
      console.log(this.idLibrary);
     /*this.bs.findbyId(params['id']).subscribe((data : Books) =>{
       this.book= data ;
       console.log(this.book);*/
      });
     
    this.bs.getBooksByLibrary(this.idLibrary).subscribe((data: Books[]) => {
      console.log(data);

      this.books = data;
    });
  }

  detailBook(id : string){
    this.router.navigateByUrl("/library/"+this.idLibrary+"/DetailBook/"+id);
  }
  addBookToWishlist(book:Books){
    this.arrBirds = localStorage.getItem("currentClient");
   let data = JSON.parse(this.arrBirds);

   this.client = new Client(data[0]['firstname'],data[0]['lastname'],data[0]['email'],data[0]['phone'],data[0]['password'],data[0]['id'])
    let wish = new Wishlist(this.client,book);
    this.ws.addBook(wish).subscribe();
  }
  searchBook(){
    if(this.serach!=''){
    this.bs.getSearchBooks(this.serach).subscribe((data: Books[]) => {
      this.books = data;
    });
  }else{
    this.bs.getBooks().subscribe((data: Books[]) => {
      console.log(data);

      this.books = data;
    });
  }
  }
  filterBook(){
    this.bs.getFilterBooks(this.category,this.place).subscribe((data: Books[]) => {
      this.books = data;
    });
  }
  CheckBook(id : string){
this.bs.checkBookInWishlist(id).subscribe((data: Books) => {
  this.bookwish= data;
  
});
}
}
