import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private baseUrl: string = 'http://localhost:8081';

  constructor(private http: HttpClient) { }
  athu(data: any): Observable<any> {
    const url = `${this.baseUrl}/api/auth/signIn`;
    return this.http.post(url, data);
  }

  createUser(data: any): Observable<any> {
    const url = `${this.baseUrl}/api/auth/signup/user`;
    return this.http.post(url, data);
  }
}
