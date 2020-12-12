import { Library } from './Library';


export class Books{
  id: number;
  name: string;
  status: string;
  image: string;
  description: string;
  author : string;
  prix: number;
  library : Library;
 
  
  
  


  constructor(id: number, name: string,  status: string, image: string, description: string, Author : string, prix: number,library : Library) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.image = image;
    this.description = description;
    this.author = Author;
    this.prix = prix;
    this.library = library;
  
  }
}
