import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://pleasant-fun-9cbf46904c.strapiapp.com/api'; // Replace with your Strapi API URL
  readonly token: string = environment.apiToken; // Replace with your actual API token

  constructor(private http: HttpClient) { }

  get<T>(path: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${path}`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
  }

  post<T>(path: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${path}`, body, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
  }
}
