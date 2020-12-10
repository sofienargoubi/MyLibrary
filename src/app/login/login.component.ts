import {Component, OnInit} from '@angular/core';
import {Client} from '../model/client';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../shards/client.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  client : Client;
  loginForm : FormGroup

  constructor(  private formBuilder :FormBuilder ,
    private clientService : ClientService,
    private router : Router
     ) { 
    let formControls = {
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    }
    this.loginForm = this.formBuilder.group(formControls);
  }



  ngOnInit(): void {
    let isLoggedIn = this.clientService.isLoggedIn();
    if(isLoggedIn){
      this.router.navigate(['/Books']);
    }
    
  }
  
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  login(){
    let data = this.loginForm.value;
   
    this.clientService.loginClient(data.email,data.password).subscribe(
    
      (d: Client) => {
        this.client=d;
      console.log(d);
      localStorage.setItem("currentClient",JSON.stringify(this.client));
      this.router.navigate(['/']);
      });
  }

 


}
