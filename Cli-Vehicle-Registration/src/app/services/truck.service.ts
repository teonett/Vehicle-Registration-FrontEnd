import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Truck } from '../models/truck';

@Injectable({
  providedIn: 'root'
})
export class TruckService {

  public currentYear: number=new Date().getFullYear();
  
  baseUrl = 'http://localhost:3000/trucks'

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  listAll() : Observable<Truck[]> {
    return this.httpClient.get<Truck[]>(this.baseUrl)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  listById(id: number): Observable<Truck> {
    return this.httpClient.get<Truck>(`${this.baseUrl}/${id}`)
    .pipe(
      retry(2),
      catchError(this.handleError))
  }

  createTruck(truck: Truck): Observable<Truck> {
    return this.httpClient.post<Truck>(this.baseUrl, JSON.stringify(truck), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateTruck(truck: Truck): Observable<Truck> {
    return this.httpClient.put<Truck>(this.baseUrl + '/' + truck.id, JSON.stringify(truck), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteTruck(id: Number) {
    return this.httpClient.delete<Truck>(this.baseUrl + '/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }

    console.log(errorMessage);
    
    return throwError(errorMessage);
  };

}
