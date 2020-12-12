import { Books } from './Books';
import { Client } from './client';

export class Wishlist {

    id:number;
    client : Client;
    book : Books;
    constructor(client:Client,book:Books){
        
        this.client= client;
        this.book = book;

    }
}