import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {MovieOverviewModel} from "../../models/movies/movies-overview.model";
import {Injectable} from "@angular/core";
import {environment} from '../../../environments/environment';
import {MoviesOverviewResponse} from "../../models/movies/movies-overview.response";
import {MovieDetailModel} from "../../models/movies/movie-detail.model";
import {CustomCookieService} from "./custom-cookie.service";

@Injectable({ providedIn: 'root' })
export class MovieService {
  private apiBaseUrl = environment.apiBaseUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient, private customCookieService: CustomCookieService) {}

  public getChristopherNolanMovies$(director ='Christopher Nolan'): Observable<MovieOverviewModel[]> {
    const expression = `${director}`;

    return this.http.get<MoviesOverviewResponse>(`${this.apiBaseUrl}/SearchMovie/${this.apiKey}/${expression}`).pipe(
      map(response => response.results.map(movieResponse => {
        const isFavorite = this.customCookieService.getFavoriteStatus(movieResponse.id);
        return MovieOverviewModel.fromApi(movieResponse, isFavorite);
      })),
      catchError(error => {
        console.error('Error fetching movies:', error);
        return throwError(() => new Error('Error fetching movies'));
      })
    );
  }

  public getTitleById$(id: string): Observable<MovieDetailModel> {
    return this.http.get<MovieDetailModel>(`${this.apiBaseUrl}/Title/${this.apiKey}/${id}`).pipe(
      map(response => {
        const isFavorite = this.customCookieService.getFavoriteStatus(response.id);
        return MovieDetailModel.fromApi(response, isFavorite);
      }),
      catchError(error => {
        console.error('Error fetching movie details:', error);
        return throwError(() => new Error('Error fetching movie details'));
      })
    );
  }

}
