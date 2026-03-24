import { Injectable, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isPlatformServer } from '@angular/common';
import { environment } from '../../../environments/environment';
import { SERVER_ENVIRONMENT } from '../providers/server-environment.provider';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://pleasant-fun-9cbf46904c.strapiapp.com/api'; // Replace with your Strapi API URL
  readonly token: string;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Optional() @Inject(SERVER_ENVIRONMENT) private serverEnvironment: typeof environment
  ) {
    if (isPlatformServer(this.platformId) && this.serverEnvironment) {
      this.token = this.serverEnvironment.apiToken;
    } else {
      this.token = environment.apiToken;
    }
  }

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
