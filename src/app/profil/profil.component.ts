import { JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Client } from '../model/client';
import { ClientService } from '../shards/client.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  firstnameC : string;
  lastnameC : string;
  emailC : string;
  phoneC : string;
  passwordC:string;
  idC:string;
  client : Client;
  clientt : Client[];
  arrBirds: string ;
  constructor(private clientService:ClientService, private router : Router,  private toastr: ToastrService) { }

  ngOnInit(): void {
   this.arrBirds = localStorage.getItem("currentClient");
   let data = JSON.parse(this.arrBirds);

   this.client = new Client(data[0]['firstname'],data[0]['lastname'],data[0]['email'],data[0]['phone'],data[0]['password'],data[0]['id'])
   console.log(this.client)

   this.firstnameC=data[0]['firstname'];
   this.lastnameC=data[0]['lastname'];
   this.emailC = data[0]['email'];
   this.passwordC = data[0]['password'];
   this.phoneC = data[0]['phone'];
   this.idC = data[0]['id'];
   console.log( this.idC);
    
   
 

  }

  updateClient( updateForm : NgForm){
    console.log(updateForm.value.id);
    
     this.client = new Client( this.firstnameC,this.lastnameC,this.emailC, this.phoneC,this.passwordC ,this.idC);
     this.clientService.updateClient(this.idC,this.client).subscribe(
      (d: Client) => {
        this.client=d;
     
      console.log(d);
      this.toastr.success('Update Successfuly', 'Toastr fun!');
      localStorage.removeItem("currentClient");
      localStorage.setItem("currentClient",JSON.stringify(this.client));
      this.router.navigate(['/profil']);
      });
     
   // console.log(updateForm);
   console.log(this.client);

   //localStorage.removeItem("currentClient");
   //localStorage.setItem("currentClient",JSON.stringify(this.client));
   console.log(localStorage.getItem("currentClient"));
  }

  

}
