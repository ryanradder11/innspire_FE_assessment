import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {MovieModel} from "../../models/movies/movies.model";
import {Injectable} from "@angular/core";
import {environment} from '../../../environments/environment';
import {MoviesResponse} from "../../models/movies/movies.response";
import {MovieDetailModel} from "../../models/movies/movie-detail.model";
import {CustomCookieService} from "./custom-cookie.service";

@Injectable({ providedIn: 'root' })
export class MovieService {
  private apiBaseUrl = environment.apiBaseUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient, private customCookieService: CustomCookieService) {}

  public getChristopherNolanMoviesWithCillianMurphy$(director ='Christopher Nolan', actor ='Cillian Murphy'): Observable<MovieModel[]> {
    const params = new HttpParams();
    const expression = `${director}`;

    return this.http.get<MoviesResponse>(`${this.apiBaseUrl}/SearchMovie/${this.apiKey}/${expression}`, { params }).pipe(
      map(response => response.results.map(
        movieResponse => {
          const isFavorite = this.customCookieService.getFavoriteStatus(movieResponse.id);
          return MovieModel.fromApi(movieResponse, isFavorite)})
      ));
  }

  public getTitleById$(id: string): Observable<any> {
    const params = new HttpParams();
    return this.http.get<MovieDetailModel>(`${this.apiBaseUrl}/Title/${this.apiKey}/${id}`, { params }).pipe(
      map(response => {
        const isFavorite = this.customCookieService.getFavoriteStatus(response.id);
        return MovieDetailModel.fromApi(response, isFavorite)
      })
    );
  }

}
