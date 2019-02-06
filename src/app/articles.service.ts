import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from './article';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };

@Injectable()
export class ArticlesService {

  private url: string = 'http://loc.mean.example.com:3000/api/articles';

  constructor(private http: HttpClient) {}

  getArticle(): Observable<Article> {
    return this.http.get<Article>(this.url);
  }

  getArticles(id: string): Observable<Article> {
    return this.http.get<Article>(`${this.url}/${id}`);
  }

  createArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.url, article, httpOptions);
  }

  editArticle (article: Article): Observable<Article> {
    return this.http.put<Article>(this.url, article, httpOptions);
  }
}
