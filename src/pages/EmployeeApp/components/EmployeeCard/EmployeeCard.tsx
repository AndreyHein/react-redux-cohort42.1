import { useContext } from "react";

import { EmployeeContext } from "pages/EmployeeApp/components/EmployeeLayout/EmployeeLayout";

import { CardLabel, CardContainer, CardItem, UsersNotFound } from "./styles";
import { UserDataProps } from "pages/EmployeeApp/types";

function EmployeeCard() {
  const { userData } = useContext(EmployeeContext);
  console.log(userData);
  const userCards = userData.map((user: UserDataProps) => {
    return (
      <CardContainer>
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
      </CardContainer>
    );
  });
  return <>{userData.length > 0 ? userCards : <UsersNotFound>Users not found</UsersNotFound> }</>;

}
export default EmployeeCard;
