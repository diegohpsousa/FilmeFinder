import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  private apikey = "7bffa79f"; //converter em variavel de ambiente. 
  private url = `http://www.omdbapi.com/?apikey=${this.apikey}`

  constructor(private http:HttpClient) { }

  searchMovie(title: string, page: number = 1): Observable<any> {
    return this.http.get(`${this.url}&s=${title}&type=movie&page=${page}`);
  }

  getMovieById(id: string): Observable<any>{
    return this.http.get(`${this.url}&i=${id}`)
  }
}
