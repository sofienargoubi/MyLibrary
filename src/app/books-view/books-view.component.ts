import { Component, OnInit } from '@angular/core';
import { Books } from '../model/Books';
import { BooksService } from '../shards/books.service';

@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.css']
})
export class BooksViewComponent implements OnInit {

  books: Books[] = [];
 
  
  constructor(private  bs: BooksService) { }

  ngOnInit(): void {
    this.bs.getBooks().subscribe((data: Books[]) => {
      console.log(data);

      this.books = data;
    });
  }

}
