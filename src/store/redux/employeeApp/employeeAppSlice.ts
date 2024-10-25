import { v4 } from "uuid"
import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"

import { EmployeeInitialState, UserData } from "pages/EmployeeApp/types"

const userDataInitialState: EmployeeInitialState = {
  userData: [],
  error: undefined,
  isLoading: false,
}

export const employeeSlice = createAppSlice({
  name: "EMPLOYEE",
  initialState: userDataInitialState,
  reducers: create => ({
    deleteAllUsers: create.reducer(() => userDataInitialState),
    deleteUser: create.reducer(
      (state: EmployeeInitialState, action: PayloadAction<string>) => {
        state.userData = [...state.userData].filter(
          (user: UserData) => user.id !== action.payload,
        )
      },
    ),
    addUser: create.reducer(
      (state: EmployeeInitialState, action: PayloadAction<UserData>) => {
        state.isLoading = false
        state.userData = [
          ...state.userData,
          {
            id: v4(),
            name: action.payload.name,
            surname: action.payload.surname,
            age: action.payload.age,
            jobPosition: action.payload.jobPosition,
          },
        ]
      },
    ),
  }),
  selectors: {
    employees: (state: EmployeeInitialState) => state,
  },
})

export const employeeSliceAction = employeeSlice.actions
export const employeeSliceSelectors = employeeSlice.selectors
