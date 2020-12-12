import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {ClientComponent} from './client/client.component';
import {LoginComponent} from './login/login.component';
import {BooksComponent} from './books/books.component';

import {WishlistComponent} from './wishlist/wishlist.component';
import {RegisterComponent} from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { Page404Component } from './page404/page404.component';
import { ProfilComponent } from './profil/profil.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { BooksViewComponent } from './books-view/books-view.component';
import { LibraryComponent } from './library/library.component';





const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'client', component: ClientComponent, canActivate:[AuthGuard]},
  {path: 'library', component: LibraryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'library/:idLibrary', component: BooksComponent , canActivate:[AuthGuard],
    children : [
      {path:'', component : BooksViewComponent},
      {path:'DetailBook/:id', component : DetailBookComponent}
    
]},

  {path: 'wishlist', component: WishlistComponent, canActivate:[AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'profil', component: ProfilComponent},
  {path: '**', component: Page404Component}
  

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
