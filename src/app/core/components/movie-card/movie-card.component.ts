import {Component, Input} from '@angular/core';
import {MovieModel} from "../../../models/movies/movies.model";
import {MatCard, MatCardActions, MatCardHeader, MatCardImage, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

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
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {

  @Input() public movie!: MovieModel;

  public isFavorite: boolean = false;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

}
