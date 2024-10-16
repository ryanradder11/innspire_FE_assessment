import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../../shared/services/movie.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cNolan_cMurhpy';

  ngOnInit(): void {
    console.log('AppComponent initialized');
  }
}
