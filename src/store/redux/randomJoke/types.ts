export interface RandomJoke {
  id: string
  setup: string
  punchline: string
}

export interface RandomJokeInitialState {
  data: RandomJoke[]
  error: undefined | string
  isLoading: boolean
}
