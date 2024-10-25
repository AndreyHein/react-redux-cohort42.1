import { useEffect } from "react"

import {
  CardLabel,
  CardContainer,
  CardItem,
  PageWrapper,
  UsersNotFound,
  ButtonControl,
  CardWrapper
} from "./styles"
import { UserData } from "pages/EmployeeApp/types"

import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  employeeSliceAction,
  employeeSliceSelectors,
} from "store/redux/employeeApp/employeeAppSlice"

import Button from "components/Button/Button"

function EmployeeCard() {
  const dispatch = useAppDispatch()

  const { userData, error } = useAppSelector(
    employeeSliceSelectors.employees,
  )

  const deleteAllUsers = () => {
    dispatch(employeeSliceAction.deleteAllUsers())
  }

  const userCards = userData.map((user: UserData) => {
    const deleteUser = () => {
      dispatch(employeeSliceAction.deleteUser(user.id))
    }

    return (
      <CardWrapper key={user.id}>
        <CardLabel>
          Name:
          <CardItem>{user.name}</CardItem>
        </CardLabel>
        <CardLabel>
          Surname:
          <CardItem>{user.surname}</CardItem>
        </CardLabel>
        <CardLabel>
          Age:
          <CardItem>{user.age}</CardItem>
        </CardLabel>
        <CardLabel>
          Job Position:
          <CardItem>{user.jobPosition}</CardItem>
        </CardLabel>
        <Button name="Delete" onClick={deleteUser} isDeleteVariant />
      </CardWrapper>
    )
  })

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  return (
    <PageWrapper>
      {userData.length > 0 ? (
        <>
          <CardContainer>
            {userCards}
          </CardContainer>
          <ButtonControl>
            <Button
              name="Remove All Employees"
              onClick={deleteAllUsers}
              isDeleteVariant
            />
          </ButtonControl>
        </>
      ) : (
        <UsersNotFound>Users not found</UsersNotFound>
      )}
    </PageWrapper>
  )
}

export default EmployeeCard
