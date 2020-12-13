import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Books} from '../model/Books';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  BookUrl = 'http://localhost:3000/book';
  wishlistUrl = 'http://localhost:3000/wishlist?book.id=';
  BookSearchUrl = 'http://localhost:3000/book?name_like=';
  BookLibraryUrl = 'http://localhost:3000/book?library.id=';


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
  getBooks(): Observable<any>  {
    return this.http.get(this.BookUrl, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  getBooksByLibrary(id : string): Observable<any>  {
    return this.http.get<any>(this.BookLibraryUrl+ id);
  }
  getSearchBooks(cri : string): Observable<any>  {
    return this.http.get(this.BookSearchUrl+cri);
  }
  getFilterBooks(cri1 : string,cri2 : string): Observable<any>  {
    return this.http.get(this.BookSearchUrl+cri1+'&library.place='+cri2);
  }
  findbyId(id: number): Observable<any> {
    return this.http.get<any>(this.BookUrl + '/' + id);
  }
  checkBookInWishlist(id: string): Observable<any> {
    return this.http.get<any>(this.wishlistUrl  + id);
  }

}
