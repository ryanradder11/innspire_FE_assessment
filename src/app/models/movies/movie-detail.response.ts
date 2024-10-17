export interface MovieDetailResponse {
  id: string;
  title: string;
  originalTitle: string;
  fullTitle: string;
  type: string;
  year: string;
  image: string;
  releaseDate: string;
  runtimeMins: string;
  runtimeStr: string;
  plot: string;
  plotLocal: string;
  plotLocalIsRtl: boolean;
  awards: string;
  directors: string;
  directorList: Person[];
  writers: string;
  writerList: Person[];
  stars: string;
  starList: Person[];
  actorList: Actor[];
  fullCast: null;
  genres: string;
  genreList: KeyValue[];
  companies: string;
  companyList: any[];
  countries: string;
  countryList: KeyValue[];
  languages: string;
  languageList: any[];
  contentRating: null;
  imDbRating: string;
  imDbRatingVotes: string;
  metacriticRating: string;
  ratings: null;
  wikipedia: null;
  posters: null;
  images: null;
  trailer: null;
  boxOffice: BoxOffice;
  tagline: string;
  keywords: string;
  keywordList: any[];
  similars: Similar[];
  tvSeriesInfo: null;
  tvEpisodeInfo: null;
  errorMessage: string;
}

export interface Person {
  id: string;
  name: string;
}

export interface Actor extends Person {
  image: string;
  asCharacter: string;
}

export interface KeyValue {
  key: string;
  value: string;
}

export interface BoxOffice {
  budget: string;
  openingWeekendUSA: string;
  grossUSA: string;
  cumulativeWorldwideGross: string;
}

export interface Similar {
  id: string;
  title: string;
  image: string;
  imDbRating: string;
}
