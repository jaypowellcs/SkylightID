import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeckMount } from '../Models/deckmount.model';


const baseUrl = 'http://localhost:8080/skylight/deckmount';

@Injectable({
  providedIn: 'root'
})
export class DeckmountService {

  constructor(private http: HttpClient) { }

  getAll():Observable<DeckMount[]>{
    return this.http.get<DeckMount []>(baseUrl);
  }

  get(id_deckmount: any): Observable<DeckMount> {
    return this.http.get(`${baseUrl}/${id_deckmount}`);
  }

}
