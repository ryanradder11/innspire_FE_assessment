export interface MoviesOverviewResponse {
  searchType: string,
  expression: string,
  results: MovieSummaryResponse[],
  errorMessage: string
}

export interface MovieSummaryResponse {
  id: string,
  resultType: string,
  image: string,
  title: string,
  description: string
}
