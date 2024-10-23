import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "store/hooks"

import {
  randomJokeSliceActions,
  randomJokeSliceSelectors,
} from "store/redux/randomJoke/randomJokeSlice"

import { RandomJoke } from "store/redux/randomJoke/types"

import {
  PageWrapper,
  JokeCard,
  JokeTextType,
  JokeTextPunchline,
  JokesContainer,
  JokeTextContainer,
  JokeAndButton,
  ButtonControl,
} from "./styles"

import Button from "components/Button/Button"

function Homework_18() {
  const dispatch = useAppDispatch()
  const { data, error, isLoading } = useAppSelector(
    randomJokeSliceSelectors.randomJokes,
  )

  const getRandomJoke = () => {
    dispatch(randomJokeSliceActions.getRandomJoke())
  }

  const delRandomJokes = () => {
    dispatch(randomJokeSliceActions.deleteAllJokes())
  }

  const delJokeById = (key:string) => {
    dispatch(randomJokeSliceActions.deleteJokesById(key))
  }

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  const randomJokes = data.map((randomJoke:RandomJoke)=>{
    return (
        <JokeAndButton key={randomJoke.id}>
            <JokeTextContainer>
        <JokeTextType>{randomJoke.setup}</JokeTextType>
        <JokeTextPunchline>{randomJoke.punchline}</JokeTextPunchline>
        </JokeTextContainer>
        <Button name="Delete Joke" onClick={() => delJokeById(randomJoke.id)}/>
        </JokeAndButton>
    )
  })

  return (
    <PageWrapper>
      <JokeCard>
        <ButtonControl>
            {data.length > 0 && <Button name="Delete All Jokes" onClick={delRandomJokes}/>}
        </ButtonControl>
        <JokesContainer>{data.length > 0 && randomJokes}</JokesContainer>
        <Button disabled={isLoading} name="Get Random Joke" onClick={getRandomJoke} />
      </JokeCard>
    </PageWrapper>
  )
}
export default Homework_18
