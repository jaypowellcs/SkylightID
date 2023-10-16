import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CurbMount } from '../Models/curbmount.model';

const baseUrl = 'http://localhost:8080/skylight/curbmount';

@Injectable({
  providedIn: 'root'
})
export class CurbmountService {

  
  constructor(private http: HttpClient) { }

  getAll():Observable<CurbMount[]> {
    return this.http.get<CurbMount[]>(baseUrl);
  }
  get(id_curbmount: any): Observable<CurbMount> {
    return this.http.get(`${baseUrl}/${id_curbmount}`);
  }

  submitApplication(ocdw: number, ocdh: number) {
    console.log(`Homes application received: firstName: ${ocdw}, lastName: ${ocdh}.`);
  }
}
