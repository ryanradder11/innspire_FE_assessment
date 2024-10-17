import { Component } from '@angular/core';
import {MovieService} from "../../../shared/services/movie.service";
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    NgIf,
    NgForOf
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

  public movies$ = this.movieService.getChristopherNolanMoviesWithCillianMurphy$();
  public constructor(private movieService: MovieService) {}
}
