import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './services/movie.service';
import {CustomCookieService} from "./services/custom-cookie.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    MovieService,
    CustomCookieService
  ],
  exports: [
    HttpClientModule,
  ]
})
export class SharedModule { }
