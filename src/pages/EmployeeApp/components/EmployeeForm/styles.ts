import styled from "@emotion/styled"

import { colors } from "styles/colors"

export const EmployeeFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 590px;
  height: auto;
  border: 1px solid #000000;
  padding: 40px;
  border-radius: 8px;
  background-color: ${colors.WHITE};
  gap: 40px;
  box-sizing: border-box;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
`
export const SuccessModalWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
`;

export const ModalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const ModalInfo = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: purple;
`;