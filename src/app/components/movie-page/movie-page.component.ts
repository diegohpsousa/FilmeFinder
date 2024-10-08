import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OmdbService } from '../../service/omdb.service';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.scss'
})
export class MoviePageComponent implements OnInit{
  movie: any;

  constructor(private route: ActivatedRoute, private omdbService: OmdbService, private location: Location){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.omdbService.getMovieById(id).subscribe((data: any) => {
        this.movie = data
      })
    }
  }
  calculateStarWidth(value: string): number {
    if (value.includes('%')) {
      return parseFloat(value);
    } else if (value.includes('/')) {
      const [numerator, denominator] = value.split('/').map(Number);
      return (numerator / denominator) * 100;
    }
    return 0;
  }

  getClassificationIcon(rating: string): string {
    const icons: { [key: string]: string } = {
      'G': 'assets/G.png',
      'PG': 'assets/PG.png',
      'PG-13': 'assets/PG-13.png',
      'R': 'assets/R.png',
      'NC-17': 'assets/NC-17.png',
    };
    return icons[rating] || 'assets/default.png';
  }

  getRatingIcon(source: string): string {
    const ratingIcons: { [key: string]: string } = {
      'Internet Movie Database': 'assets/imdb.png',
      'Rotten Tomatoes': 'assets/rotten-tomatoes.png',
      'Metacritic': 'assets/metacritic.png',
    };
    return ratingIcons[source] || 'assets/default.png';
  }

  goBack(): void{
    this.location.back()
  }
}
