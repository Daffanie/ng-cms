import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

// Set outbound HTTP headers to JSON
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UsersService{

  // Set up the URL
  private url: string = 'http://loc.mean.example.com:3000/api/users';

  // Call the HttpClient in the Constructor
  constructor(private http: HttpClient) {}

  // Set up a simple ovservable
  getUsers(): Observable<User> {
    return this.http.get<User>(this.url);
  }

}
