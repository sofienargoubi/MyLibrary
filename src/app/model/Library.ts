import { Books } from './Books';

export class Library {

    id : number;
    name : string;
    description:string;
    status : string;
    place : string;
   
    
    constructor(id: number, name: string, description:string,status : string, place: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
        this.place = place;
       
        
     
      }


}