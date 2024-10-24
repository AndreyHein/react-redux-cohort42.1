
import { LayoutProps } from "pages/EmployeeApp/types";
import { EMPLOYEE_APP_ROUTES } from "constants/routes";

import {
  LayoutWrapper,
  AppHeader,
  HeaderLink,
  HeaderLogo,
  HeaderNav,
  AppMain,
} from "./styles";

function EmployeeLayout({ children }: LayoutProps) {

  return (

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
  
  );
}

export default EmployeeLayout;
