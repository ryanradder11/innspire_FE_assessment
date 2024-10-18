import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MovieOverviewModel} from "../../../models/movies/movies-overview.model";
import {MatCard, MatCardActions, MatCardHeader, MatCardImage, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {MovieDetailModel} from "../../../models/movies/movie-detail.model";

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatIcon,
    MatCardActions,
    MatCardImage,
    MatIconButton,
    MatButton,
    MatCardTitle,
    RouterLink,
    NgIf,
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {

  @Input({transform: (value: MovieDetailModel | MovieOverviewModel): MovieOverviewModel => {
   if (value instanceof MovieDetailModel) {
    return new MovieOverviewModel(value.id, '', value.image, value.title, value.plot, value.isFavorite) ;
  } else {
    return value;
   }}
  }) public movie!: MovieOverviewModel;
  @Output() public favoriteToggled = new EventEmitter<MovieOverviewModel>();

  toggleFavorite() {
    this.movie.isFavorite = !this.movie.isFavorite;
    this.favoriteToggled.emit(this.movie);
  }

}
