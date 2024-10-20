import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  counterSliceActions,
  counterSliceSelector,
} from "store/redux/counter/counterSlice"

import { PageWrapper } from "./styles"
import Counter from "components/Counter/Counter"
function Lesson_16() {
  const count = useAppSelector(counterSliceSelector.count)

  const dispatch = useAppDispatch()

  const onPlus = () => {
    const action = counterSliceActions.plus()

    dispatch(action)
  }
  const onMinus = () => {
    dispatch(counterSliceActions.minus())
  }

  const onDividy = () => {
    dispatch(counterSliceActions.divide(2))
  }
  const onMultiply = () => {
    dispatch(counterSliceActions.multiply(3))
  }
  return (
    <PageWrapper>
      <Counter
        count={count}
        onPlus={onPlus}
        onMinus={onMinus}
        onDivide={onDividy}
        onMultiply={onMultiply}
      />
    </PageWrapper>
  )
}
export default Lesson_16
