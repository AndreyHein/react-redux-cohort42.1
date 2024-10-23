import { v4 } from "uuid"

import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"

import { RandomJokeInitialState } from "./types"

const randomJokeInitialState: RandomJokeInitialState = {
  data: [],
  error: undefined,
  isLoading: false,
}

export const randomJokeSlice = createAppSlice({
  name: "RANDOM_JOKE",
  initialState: randomJokeInitialState,
  reducers: create => ({
    getRandomJoke: create.asyncThunk(
      async (_, { rejectWithValue }) => {
        const JOKE_API_URL: string =
          "https://official-joke-api.appspot.com/random_joke"

        const response = await fetch(JOKE_API_URL)
        const result = await response.json()

        if (response.ok) {
          return result
        } else {
          rejectWithValue(result)
        }
      },
      {
        pending: (state: RandomJokeInitialState) => {
          state.error = undefined
          state.isLoading = true
        },
        fulfilled: (state: RandomJokeInitialState, action) => {
          state.isLoading = false
          state.data = [
            ...state.data,
            {
              id: v4(),
              setup: action.payload.setup,
              punchline: action.payload.punchline,
            },
          ]
        },
        rejected: (state: RandomJokeInitialState,action) => {
          state.isLoading = false
          state.error = "Some Network Error"
        },
      },
    ),
    deleteAllJokes: create.reducer(() => randomJokeInitialState),
    // deleteAllJokes: create.reducer((state: RandomJokeInitialState) => {
    //   state.data = []
    //   state.error = undefined
    //   state.isLoading = false
    // }),
    deleteJokesById: create.reducer(
      (state: RandomJokeInitialState, action: PayloadAction<string>) => {
        state.data.filter(joke => joke.id !== action.payload)
      },
    ),
  }),
  selectors: {
    randomJokes: (state: RandomJokeInitialState) => state,
  },
})

export const randomJokeSliceActions = randomJokeSlice.actions
export const randomJokeSliceSelectors = randomJokeSlice.selectors
