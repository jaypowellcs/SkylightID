import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelfFlashed } from '../Models/selfflashed.mount';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/skylight/selfflashed';

@Injectable({
  providedIn: 'root'
})
export class SelfflashedService {

  constructor(private http: HttpClient) { }

  getAll():Observable<SelfFlashed[]>{
    return this.http.get<SelfFlashed []>(baseUrl);
  }

  get(id_selfflashed: any): Observable<SelfFlashed> {
    return this.http.get(`${baseUrl}/${id_selfflashed}`);
  }

}
