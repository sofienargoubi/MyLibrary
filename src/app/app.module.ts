import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BooksComponent } from './books/books.component';



import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { WishlistComponent } from './wishlist/wishlist.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { Page404Component } from './page404/page404.component';
import { ProfilComponent } from './profil/profil.component';
import { FooterComponent } from './footer/footer.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { BooksViewComponent } from './books-view/books-view.component';
import { LibraryComponent } from './library/library.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    BooksComponent,
 
    LoginComponent,
    WishlistComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    Page404Component,
    ProfilComponent,
    FooterComponent,
    DetailBookComponent,
    BooksViewComponent,
    LibraryComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
      HttpClientModule,
      FormsModule,
      ToastNoAnimationModule.forRoot(),
       ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
