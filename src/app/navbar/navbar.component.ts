import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../shards/client.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn : Boolean ;
  constructor(private clientService : ClientService,
   private router : Router
    ) { }

  ngOnInit(): void {
    this.isLoggedIn=this.clientService.isLoggedIn();
  }

  logout(){
    localStorage.removeItem("currentClient");
    this.router.navigate(['/']);
  }
  
}
