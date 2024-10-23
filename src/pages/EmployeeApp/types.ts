import { ReactNode,  Dispatch, SetStateAction } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface UserDataProps {
  name: string;
  surname: string;
  age: string;
  jobPosition: string;
}

 export interface EmployeeContextState {
  userData: UserDataProps[],
  setUserData:Dispatch<SetStateAction<UserDataProps[]>>
}