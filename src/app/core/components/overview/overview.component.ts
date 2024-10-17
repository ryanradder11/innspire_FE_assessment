import { Component } from '@angular/core';
import {MovieService} from "../../../shared/services/movie.service";
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {MovieCardComponent} from "../movie-card/movie-card.component";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    NgIf,
    NgForOf,
    MovieCardComponent,
    MatProgressSpinner
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

  public movies$ = this.movieService.getChristopherNolanMoviesWithCillianMurphy$();
  public constructor(private movieService: MovieService) {}
}
