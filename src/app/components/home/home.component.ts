import { Component, OnInit } from '@angular/core';
import { ImdbService } from 'src/app/services/imdb.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public loading = false;
  top10Movies;
  top10MoviesByGenre;

  constructor(private imdbService:ImdbService,private router:Router) { }

  ngOnInit() {

    this.loading = true;
    this.imdbService.getTop10Movies().subscribe(data=>{
      this.top10Movies=data;
      this.loading = false;
    })
  }

  findGenreMovies(genre:string){
    sessionStorage.setItem('genre',genre);
    this.router.navigate(['genre',genre]);
  }

}
