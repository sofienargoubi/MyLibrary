

export class Books{
  id: number;
  name: string;
  image: string;
  description: string;
  author : string;
  prix: number;
 
  
  
  


  constructor(id: number, name: string, image: string, description: string, Author : string, prix: number) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.author = Author;
    this.prix = prix;
  
  }
}
