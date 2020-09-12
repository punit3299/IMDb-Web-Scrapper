import { Component, OnInit } from '@angular/core';
import { ImdbService } from 'src/app/services/imdb.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  top10MoviesByGenre:any;
  genre:string;
  public loading = false;

  constructor(private imdbService:ImdbService) { }

  ngOnInit() {
    this.loading = true;
    this.genre=sessionStorage.genre;
    this.imdbService.getTop10MoviesByGenre(sessionStorage.genre).subscribe(data=>{
      this.top10MoviesByGenre=data;
      this.loading=false;
    })
  }

}
