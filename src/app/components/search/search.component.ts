import { Component } from '@angular/core';
import { OmdbService } from '../../service/omdb.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  movie: any;

  constructor(private omdbService: OmdbService){}

  searchMovie(title: string){
    this.omdbService.searchMovie(title).subscribe((data) => {
      this.movie = data
    })
  }

}
