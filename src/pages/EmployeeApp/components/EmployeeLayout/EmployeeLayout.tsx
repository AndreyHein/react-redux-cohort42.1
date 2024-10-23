import { useState, createContext } from "react";

import { LayoutProps, UserDataProps, EmployeeContextState } from "pages/EmployeeApp/types";
import { EMPLOYEE_APP_ROUTES } from "constants/routes";

import {
  LayoutWrapper,
  AppHeader,
  HeaderLink,
  HeaderLogo,
  HeaderNav,
  AppMain,
} from "./styles";

export const EmployeeContext = createContext<EmployeeContextState>({
  userData: [],
  setUserData: () => {},
});

function EmployeeLayout({ children }: LayoutProps) {
  const [userData, setUserData] = useState<UserDataProps[]>([]);
  console.log(userData)

  return (
    <EmployeeContext.Provider value={{ userData, setUserData }}>
      <LayoutWrapper>
        <AppHeader>
          <HeaderLogo
            src="https://www.365akademie.de/wp-content/uploads/2022/11/Microsoft-365-Apps-Logo-1.png"
            alt="App Logo"
          />
          <HeaderNav>
            <HeaderLink to={EMPLOYEE_APP_ROUTES.CREATE_EMPLOYEE}>
              Create Employee
            </HeaderLink>

            <HeaderLink to={EMPLOYEE_APP_ROUTES.EMPLOYEES}>
              Employees
            </HeaderLink>
          </HeaderNav>
        </AppHeader>
        <AppMain>{children}</AppMain>
      </LayoutWrapper>
    </EmployeeContext.Provider>
  );
}

export default EmployeeLayout;
