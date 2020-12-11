import { Component, OnInit } from '@angular/core';
import {Client} from '../model/client';
import {BooksService} from '../shards/books.service';
import {Books} from '../model/Books';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {



  
  constructor() { }

  ngOnInit(): void {
    
  }

  

}
