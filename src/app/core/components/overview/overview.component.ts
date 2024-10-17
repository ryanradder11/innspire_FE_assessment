import { Component } from '@angular/core';
import {MovieService} from "../../../shared/services/movie.service";
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {MovieCardComponent} from "../movie-card/movie-card.component";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {CustomCookieService} from "../../../shared/services/custom-cookie.service";
import {SharedModule} from "../../../shared/shared.module";
import {MovieOverviewModel} from "../../../models/movies/movies-overview.model";

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    NgIf,
    NgForOf,
    MovieCardComponent,
    MatProgressSpinner,
    SharedModule,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

  public movies$ = this.movieService.getChristopherNolanMoviesWithCillianMurphy$();
  public constructor(private movieService: MovieService, private customCookieService : CustomCookieService) {}

  public toggleFavorite(movie: MovieOverviewModel) {
    this.customCookieService.setFavoriteStatus(movie.id, movie.isFavorite);
  }
}
