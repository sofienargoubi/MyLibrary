import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Books } from '../model/Books';
import { BooksService } from '../shards/books.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {

  book ;
  constructor(private bs:BooksService , private route: ActivatedRoute) { }

  ngOnInit(): void {
  
    this.route.params.subscribe(params => {
      console.log(params);
      this.bs.findbyId(params['id']).subscribe((data : Books) =>{
       this.book= data ;
       console.log(this.book);
      });
     
      
    });

  }

}
