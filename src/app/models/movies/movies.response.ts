export interface MoviesResponse{
  searchType: string,
  expression: string,
  results: MovieResponse[],
  errorMessage: string
}

export interface MovieResponse{
  id: string,
  resultType: string,
  image: string,
  title: string,
  description: string
}
