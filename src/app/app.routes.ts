import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'movie/:id',
        component: MoviePageComponent
    },
];
