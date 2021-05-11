import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl: string = 'http://localhost:3000/api';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }


  // fetch data from backend
  getShoppingItems(): Observable<any>{
    return this.http.get('http://localhost:3000/api/get_items');

  }


  // add new data to backend
  addShoppingItem(newItem): Observable<any> {
    let API_URL = `${this.apiUrl}/post_items`;
    return this.http.post(API_URL, newItem)
      .pipe(
        catchError(this.error)
      )
  }


  // to delete an item
  deleteShoppingItem(id): Observable<any> {
    var API_URL = `${this.apiUrl}/delete_items/${id}`;
    return this.http.delete(API_URL)
    .pipe(
      catchError(this.error)
    )
  }


  // to update existing shopping data
  updateShoppingItem(data): Observable<any> {
    let API_URL = `${this.apiUrl}/update_items/${data._id}`;
    console.log('debug in data service on line 47');
    return this.http.put(API_URL, data)
    .pipe(
      catchError(this.error)
      
    )
  }


  // register user
  // registrUser(userData): Observable<any> {
  //   return this.http.post('http://127.0.0.1:8000/api/register/users/', userData);
  // }



  // Handle Errors 
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
