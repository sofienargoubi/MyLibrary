export class Books{
  id: number;
  name: string;
  image: string;
  description: string;
  prix: number;
  quantity: number;
  status: string;


  constructor(id: number, name: string, image: string, description: string, prix: number, quantity: number, status: string) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.prix = prix;
    this.quantity = quantity;
    this.status = status;
  }
}
