import styled from "@emotion/styled"

import { colors } from "styles/colors"

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
  background-color: ${colors.PRIMARY};
`

export const JokeCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 700px;
  min-height: 300px;
  max-height: 800px;
  padding: 40px;
  border: 2px solid black;
  border-radius: 6px;
  background-color: white;
  overflow-y: auto;
`

export const JokesContainer = styled.ol`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 30px;
`

export const JokeTextType = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: brown;
`
export const JokeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const JokeAndButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`

export const JokeTextPunchline = styled(JokeTextType)`
  color: darkblue;
`

export const JokeWrapper = styled.div`
  display: flex;
  gap: 10px;
`

export const ButtonControl = styled.div`
  min-width: 100px;
`
