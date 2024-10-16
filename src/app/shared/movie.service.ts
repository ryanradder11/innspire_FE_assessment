import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Movie} from "../models/movies.model";
import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class MovieService {
  private apiBaseUrl = 'https://api.example.com'; // Replace with the actual IMDb base URL
  private apiKey = 'your-api-key-here'; // Your IMDb API key

  constructor(private http: HttpClient) {}

   public getChristopherNolanMoviesWithCillianMurphy(): Observable<Movie[]> {
    const params = new HttpParams()
      .set('apiKey', this.apiKey)
      .set('director', 'Christopher Nolan')
      .set('actor', 'Cillian Murphy');

    return this.http.get<any>(`${this.apiBaseUrl}/movies`, { params }).pipe(
      map(response => response.results as Movie[])
    );
  }
}
