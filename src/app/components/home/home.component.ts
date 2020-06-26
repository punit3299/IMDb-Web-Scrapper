import { Component, OnInit } from '@angular/core';
import { ImdbService } from 'src/app/services/imdb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  top10Movies;
  top10MoviesByGenre;

  constructor(private imdbService:ImdbService,private router:Router) { }

  ngOnInit() {
    this.imdbService.getTop10Movies().subscribe(data=>{
      console.log(data);
      this.top10Movies=data;
    })
  }

  findGenreMovies(genre:string){
    sessionStorage.setItem('genre',genre);
    this.router.navigate(['genre',genre]);
  }

}
