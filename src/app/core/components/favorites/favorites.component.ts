import { Component } from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MovieCardComponent} from "../movie-card/movie-card.component";
import {MovieService} from "../../../shared/services/movie.service";
import {CustomCookieService} from "../../../shared/services/custom-cookie.service";
import {MovieModel} from "../../../models/movies/movies.model";
import {forkJoin, Observable} from "rxjs";

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    AsyncPipe,
    MatProgressSpinner,
    MovieCardComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {

  public favoriteMovies$!: Observable<MovieModel[]>;

  public constructor(private movieService: MovieService, private customCookieService : CustomCookieService) {
    const favoriteIds = this.customCookieService.getFavoriteIds();
    this.favoriteMovies$ = this.getMoviesByIds$(favoriteIds);
  }

  public toggleFavorite(movie: MovieModel) {
    this.customCookieService.setFavoriteStatus(movie.id, movie.isFavorite);
  }

  private getMoviesByIds$(ids: string[]): Observable<MovieModel[]> {
    const movieObservables = ids.map(id => this.movieService.getTitleById$(id));
    return forkJoin(movieObservables);
  }
}
