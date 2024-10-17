import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../../shared/services/movie.service";
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {MovieDetailModel} from "../../../models/movies/movie-detail.model";
import {Observable} from "rxjs";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatList, MatListItem, MatListItemIcon} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {MatLine} from "@angular/material/core";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    JsonPipe,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatList,
    MatListItem,
    MatIcon,
    MatLine,
    MatCardImage,
    MatListItemIcon,
    MatCardSubtitle,
    MatCardTitle
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

  public movieDetail$!: Observable<MovieDetailModel>;
  constructor(private route: ActivatedRoute, private movieService: MovieService) {
    const movieId = this.route.snapshot.paramMap.get('id')!;

    this.movieDetail$ = this.movieService.getTitleById$(movieId);
  }
}
