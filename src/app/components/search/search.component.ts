import { Component } from '@angular/core';
import { OmdbService } from '../../service/omdb.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  username: string = "NTT DATA"
  homeText: string = "Encontre informações sobre seus filmes. Sinopse, elenco, pontuação IMDb, onde assistir e muito mais!"
  movies: any[] = [];
  search: string  = '';
  isSearch: boolean = false;
  totalResults: number = 0;
  currentPage: number = 1;
  totalPagesNumber: number = 0;

  constructor(private omdbService: OmdbService, private router: Router){}

  searchMovie(page: number = 1){
    this.omdbService.searchMovie(this.search, page).subscribe((data) => {
      this.movies = data.Search || [];
      this.totalResults = +data.totalResults || 0;
      this.currentPage = page;
      this.totalPagesNumber = Math.ceil(this.totalResults / 10)
      this.isSearch = true

    })
  }

  get totalPages(): number[]{
    return Array(Math.ceil(this.totalResults / 10)).fill(0).map((x, i) => i + 1);
  }

  changePage(page:number): void {
    if (page >= 1  && page <= Math.ceil(this.totalResults/10)){
      this.searchMovie(page)
    }
  }

  toMoviePage(id: string){
    this.router.navigate(['/movie', id])
  }

  getVisiblePages(): number[] {
    const pages = [];
    let start = Math.max(1, this.currentPage - 3);
    let end = Math.min(this.totalPagesNumber, this.currentPage + 3);

    if (this.currentPage <= 3) {
      end = Math.min(this.totalPagesNumber, 6);
    } else if (this.currentPage + 3 >= this.totalPagesNumber) {
      start = Math.max(1, this.totalPagesNumber - 6 + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

}
