import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  private baseUrl: string = 'http://localhost:8081';

  constructor(private http: HttpClient) { }
  GetAnn(): Observable<any> {
    const url = `${this.baseUrl}/api/message/list-announce`;
    return this.http.get(url);
  }

  createAnn(data: any): Observable<any> {
    const url = `${this.baseUrl}/api/message/add-announce`;
    return this.http.post(url, data);
  }
}
