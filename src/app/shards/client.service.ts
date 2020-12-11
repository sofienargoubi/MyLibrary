import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Client } from '../model/client';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientUrl = 'http://localhost:3000/client';
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

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }
  constructor(private http: HttpClient) { }
  //update
  updateClient(id : string,client: Client): Observable<any> {
   
    return this.http.put(this.clientUrl + '/' + id, client, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
    }
  // register 

  registerClient(client : Client) : Observable<any>{
    return this.http.post(this.clientUrl, client, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  // login
  loginClient(email : string,password :string) : Observable<any>{
    return this.http.get<any>(this.clientUrl+"/?email="+email+"&password="+password).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  isLoggedIn(){
    
    let client = localStorage.getItem("currentClient");
    if(client!=null){
      return true;
    }else{
      return false;
    }
  }

}
