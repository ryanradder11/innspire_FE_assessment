import {MovieDetailResponse} from "./movie-detail.response";

export class MovieDetailModel {

  constructor(
    public id: string,
    public title: string,
    public originalTitle: string,
    public fullTitle: string,
    public type: string,
    public year: string,
    public image: string,
    public releaseDate: string,
    public runtimeMins: string,
    public runtimeStr: string,
    public plot: string,
    public plotLocal: string,
    public plotLocalIsRtl: boolean,
    public awards: string,
    public directors: string,
    public directorList: Person[],
    public writers: string,
    public writerList: Person[],
    public stars: string,
    public starList: Person[],
    public actorList: Actor[],
    public fullCast: null,
    public genres: string,
    public genreList: KeyValue[],
    public companies: string,
    public companyList: any[],
    public countries: string,
    public countryList: KeyValue[],
    public languages: string,
    public languageList: any[],
    public contentRating: null,
    public imDbRating: string,
    public imDbRatingVotes: string,
    public metacriticRating: string,
    public ratings: null,
    public wikipedia: null,
    public posters: null,
    public images: null,
    public trailer: null,
    public boxOffice: BoxOffice,
    public tagline: string,
    public keywords: string,
    public keywordList: any[],
    public similars: Similar[],
    public tvSeriesInfo: null,
    public tvEpisodeInfo: null,
    public errorMessage: string,
    public isFavorite = false
  ) {}

  static fromApi(response: MovieDetailResponse, isFavorite = false): MovieDetailModel {
    return new MovieDetailModel(
      response.id,
      response.title,
      response.originalTitle,
      response.fullTitle,
      response.type,
      response.year,
      response.image,
      response.releaseDate,
      response.runtimeMins,
      response.runtimeStr,
      response.plot,
      response.plotLocal,
      response.plotLocalIsRtl,
      response.awards,
      response.directors,
      response.directorList,
      response.writers,
      response.writerList,
      response.stars,
      response.starList,
      response.actorList,
      response.fullCast,
      response.genres,
      response.genreList,
      response.companies,
      response.companyList,
      response.countries,
      response.countryList,
      response.languages,
      response.languageList,
      response.contentRating,
      response.imDbRating,
      response.imDbRatingVotes,
      response.metacriticRating,
      response.ratings,
      response.wikipedia,
      response.posters,
      response.images,
      response.trailer,
      response.boxOffice,
      response.tagline,
      response.keywords,
      response.keywordList,
      response.similars,
      response.tvSeriesInfo,
      response.tvEpisodeInfo,
      response.errorMessage,
      isFavorite
    );
  }
}

export class Person {
  constructor(
    public id: string,
    public name: string
  ) {}
}

export class Actor extends Person {
  constructor(
    id: string,
    name: string,
    public image: string,
    public asCharacter: string
  ) {
    super(id, name);
  }
}

export class KeyValue {
  constructor(
    public key: string,
    public value: string
  ) {}
}

export class BoxOffice {
  constructor(
    public budget: string,
    public openingWeekendUSA: string,
    public grossUSA: string,
    public cumulativeWorldwideGross: string
  ) {}
}

export class Similar {
  constructor(
    public id: string,
    public title: string,
    public image: string,
    public imDbRating: string
  ) {}
}
