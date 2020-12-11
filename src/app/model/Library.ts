import { Books } from './Books';

export class Library {

    id : number;
    name : string;
    description:string;
    status : string;
    place : string;
    books : Books;
    
    constructor(id: number, name: string, description:string,status : string, place: string,books : Books) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
        this.place = place;
        this.books= books;
        
     
      }


}