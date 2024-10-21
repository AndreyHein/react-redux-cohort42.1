import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  feedbackSliceAction,
  feedbackSliceSelector,
} from "store/redux/feedback/feedbackSlice"

import { PageWrapper } from "./styles"
import Feedback from "components/Feedback/Feedback"

function Homework_16() {
  const likes = useAppSelector(feedbackSliceSelector.likes)
  const disLikes = useAppSelector(feedbackSliceSelector.disLikes)
  
  const dispatch = useAppDispatch()

  const onLike = () => {
    dispatch(feedbackSliceAction.plusLike())
  }

  const onDislike = () => {
    dispatch(feedbackSliceAction.plusDislike())
  }

  const resetResults = () => {
    dispatch(feedbackSliceAction.reset())
  }

  return (
    <PageWrapper>
      <Feedback
        likes={likes}
        dislikes={disLikes}
        onLike={onLike}
        onDislike={onDislike}
        resetResults={resetResults}
      />
    </PageWrapper>
  )
}
export default Homework_16
