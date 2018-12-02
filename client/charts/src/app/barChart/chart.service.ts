import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { IEOS } from './IEOS';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ChartService {

    private backendUrl = "http://localhost:3000/api/getChartData";
  
    constructor(private http: HttpClient) {}

    getMachineData() : Observable<IEOS> {
        return this.http.get<IEOS>(this.backendUrl).pipe(
          tap(data => console.log('')),
          catchError(this.handleError)
        );
      }
    
      private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }
    

}