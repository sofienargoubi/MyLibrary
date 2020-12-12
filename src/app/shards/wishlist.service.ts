import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Wishlist } from '../model/Wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishlistUrl = 'http://localhost:3000/wishlist';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
  constructor(private http: HttpClient) { }
  private extractData(res: Response) {
    const body = res;
    return body || { };
  }
  addBook(book : Wishlist) : Observable<any>{

    return this.http.post(this.wishlistUrl, book, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  getWishlist(): Observable<any>  {
    return this.http.get(this.wishlistUrl, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  deletewishlist( wish: Wishlist | number): Observable<any> {
    const id = typeof wish === 'number' ? wish : wish.id;
    const url = this.wishlistUrl + '/' + wish;
    return this.http.delete(url).pipe(
      map(this.extractData),
      catchError(this.handleError));;
    }
}
