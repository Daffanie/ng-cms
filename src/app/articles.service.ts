import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article';

@Injectable()
export class ArticlesService {
  private url: string = 'http://loc.mean.example.com:3000/api/articles';

  constructor(private http: HttpClient) { }

  getArticle(): Observable<Article> {
    return this.http.get<Article>(this.url);
  }

  //getArticles(id: string): Observable<Article> {
   // return this.http.get<Article>(`${this.url}/${id}`);
  //}
}
