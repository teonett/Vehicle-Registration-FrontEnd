import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { TruckModel } from '../models/truck-model';

@Injectable({
  providedIn: 'root'
})
export class TruckmodelService {

  baseUrl = 'http://localhost:3000/truckmodels'

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders ({ 'Content-Type': 'application/json' })
  }

  listData() : Observable<TruckModel[]> {
    return this.httpClient.get<TruckModel[]>(this.baseUrl)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  listById(id: number): Observable<TruckModel> {
    return this.httpClient.get<TruckModel>(`${this.baseUrl}/${id}`)
    .pipe(
      retry(2),
      catchError(this.handleError))
  }

  createTruckModel(truckmodel: TruckModel): Observable<TruckModel> {
    return this.httpClient.post<TruckModel>(this.baseUrl, JSON.stringify(truckmodel), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateTruckModel(truckmodel: TruckModel): Observable<TruckModel> {
    return this.httpClient.put<TruckModel>(this.baseUrl + '/' + truckmodel.id, JSON.stringify(truckmodel), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteTruckModel(id: Number) {
    return this.httpClient.delete<TruckModel>(this.baseUrl + '/' + id, this.httpOptions)
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
      errorMessage = `Error code: ${error.status}, ` + `message: ${error.message}`;
    }

    console.log(errorMessage);
    
    return throwError(errorMessage);
  };

}
