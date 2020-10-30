import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Traveller } from '../models/traveller';

@Injectable({
  providedIn: 'root'
})
export class MercuryClientService {

  constructor(private httpClient: HttpClient) { }

  test(): void{
    alert('WORKS');
  }

  getTraveller(): Observable<Traveller>{
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: 'mobile_traveller_app_token'
    });

    return this.httpClient.get<Traveller>('http://l0d2-mappsam-01.corp.grh.lab:8081/api/Globalblue/3.0/Members/documentType=PASSPORT&documentNumber=G85471&documentCountry=AUT', { headers: httpHeaders} );
  }
}
