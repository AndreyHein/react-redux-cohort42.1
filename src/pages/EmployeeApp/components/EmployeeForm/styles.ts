import styled from "@emotion/styled";
import { colors } from "styles/colors";

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
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
`;
