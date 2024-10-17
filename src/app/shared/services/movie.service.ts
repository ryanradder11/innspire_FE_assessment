import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {MovieModel} from "../../models/movies.model";
import {Injectable} from "@angular/core";
import { environment } from '../../../environments/environment';
import {MoviesResponse} from "../../models/movies.response";

@Injectable({ providedIn: 'root' })
export class MovieService {
  private apiBaseUrl = environment.apiBaseUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

   public getChristopherNolanMoviesWithCillianMurphy$(director ='Christopher Nolan', actor ='Cillian Murphy'): Observable<MovieModel[]> {
    const params = new HttpParams();
    const expression = `director:${director} AND actor:${actor}`;

    return this.http.get<MoviesResponse>(`${this.apiBaseUrl}/Search/${this.apiKey}/${expression}`, { params }).pipe(
      map(response => response.results.map(movieResponse => MovieModel.fromApi(movieResponse)))
    );
  }
}
