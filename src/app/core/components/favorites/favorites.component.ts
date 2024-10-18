import { Component } from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MovieCardComponent} from "../movie-card/movie-card.component";
import {MovieService} from "../../../shared/services/movie.service";
import {CustomCookieService} from "../../../shared/services/custom-cookie.service";
import {MovieOverviewModel} from "../../../models/movies/movies-overview.model";
import {forkJoin, Observable} from "rxjs";
import {Router} from "@angular/router";
import {MovieDetailModel} from "../../../models/movies/movie-detail.model";

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

  public favoriteMovies$!: Observable<MovieDetailModel[]>;

  public constructor(private movieService: MovieService, private customCookieService : CustomCookieService, private router: Router) {
    const favoriteIds = this.customCookieService.getFavoriteIds();

    if (favoriteIds.length === 0) {
      this.router.navigate(['/overview']);
      return;
    }


      this.favoriteMovies$ = this.getMoviesByIds$(favoriteIds);
  }

  public toggleFavorite(movie: MovieOverviewModel) {
    this.customCookieService.setFavoriteStatus(movie.id, movie.isFavorite);
  }

  private getMoviesByIds$(ids: string[]): Observable<MovieDetailModel[]> {
    const movieObservables = ids.map(id => this.movieService.getTitleById$(id));
    return forkJoin(movieObservables);
  }
}
