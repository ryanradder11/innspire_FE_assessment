import {MovieResponse} from "./movies.response";

export class MovieModel {
  public id: string;
  public resultType: string;
  public image: string;
  public title: string;
  public description: string;
  public isFavorite: boolean;

  public constructor( id: string, resultType: string, image: string, title: string, description: string, isFavorite: boolean = false) {
    this.id = id;
    this.resultType = resultType;
    this.image = image;
    this.title = title;
    this.description = description;
    this.isFavorite = isFavorite;
  }

  public static fromApi(response: MovieResponse, isFavorite = false): MovieModel {
    return new MovieModel(
      response.id,
      response.resultType,
      response.image,
      response.title,
      response.description,
      isFavorite
    );
  }
}
