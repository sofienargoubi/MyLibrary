import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Wishlist } from '../model/Wishlist';
import { WishlistService } from '../shards/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit  {

  @Input() wishlistW: Wishlist;
  @Output() delete = new EventEmitter<Wishlist>();
 
  constructor() { }
    sendDeleteEvent(){
        this.delete.emit(this.wishlistW);
    }
   
  ngOnInit(): void {
   
  }
 
 
   
  
 



}
