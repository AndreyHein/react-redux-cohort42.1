import { createAppSlice } from "store/createAppSlice"

import { FeedbackInitialState } from "./types"

const feedbackInitialState: FeedbackInitialState = {
  likes: 0,
  dislikes: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  reducers: create => ({
    plusLike: create.reducer((state: FeedbackInitialState) => {
      state.likes += 1
    }),
    plusDislike: create.reducer((state: FeedbackInitialState) => {
      state.dislikes += 1
    }),
    reset: create.reducer(() => feedbackInitialState),
    // reset: create.reducer((state: FeedbackInitialState) => {
    //   state.likes = 0
    //   state.dislikes = 0
    // }),
  }),
  selectors: {
    likes: (state: FeedbackInitialState) => {
      return state.likes
    },
    disLikes: (state: FeedbackInitialState) => {
      return state.dislikes
    },
  },
})

export const feedbackSliceAction = feedbackSlice.actions
export const feedbackSliceSelector = feedbackSlice.selectors
