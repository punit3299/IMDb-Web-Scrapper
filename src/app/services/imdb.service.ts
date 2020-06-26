import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {

  url="https://imdb-webcrapper-spring-app.herokuapp.com/top10Movies";

  constructor(private http:HttpClient) { }

  getTop10Movies(){
    return this.http.get(this.url)
  }

  getTop10MoviesByGenre(genre:string){
    return this.http.get(this.url+"/"+genre);
  }
}
