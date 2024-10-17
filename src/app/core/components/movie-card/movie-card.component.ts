import {Component, EventEmitter, Input, Output, output} from '@angular/core';
import {MovieModel} from "../../../models/movies/movies.model";
import {MatCard, MatCardActions, MatCardHeader, MatCardImage, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

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

  @Input() public movie!: MovieModel;

  @Output() public favoriteToggled = new EventEmitter<MovieModel>();

  toggleFavorite() {
    this.movie.isFavorite = !this.movie.isFavorite;
    this.favoriteToggled.emit(this.movie);
  }

}
