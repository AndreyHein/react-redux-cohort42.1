import { PageWrapper,ButtonControl } from "./styles"
import { useState } from "react"

import Input from "components/Input/Input"
import Button from "components/Button/Button"
import Counter from "components/Counter/Counter"

function Homework_15() {
  const [count, setCount] = useState<number>(0)

  const onPlus = () => {
    setCount((prevValue: number) => {
      return prevValue + 1
    })
  }

  const onMinus = () => {
    setCount((prevValue: number) => {
      return prevValue - 1
    })
  }
  return (
    <PageWrapper>
      <Input
        id="input-1"
        label="First name"
        placeholder="Enter your first name"
        name="first_name"
      />
      <Counter count={count} onMinus={onMinus} onPlus={onPlus} />
      <ButtonControl>
      <Button name="Send" onClick={() => {}} />
      </ButtonControl>
    </PageWrapper>
  )
}
export default Homework_15
