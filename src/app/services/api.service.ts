import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private username:string="";

  constructor(
    private httpClient: HttpClient
  ) { 
    
  }

  getUser(githubUsername: string): Observable<any> {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }

  getRepo(githubUsername: string) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}/repos`);
  }
}
