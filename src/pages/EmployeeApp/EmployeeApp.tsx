import { Route, Routes } from "react-router-dom"

import { EMPLOYEE_APP_ROUTES } from "constants/routes"

import EmployeeLayout from "./components/EmployeeLayout/EmployeeLayout"
import EmployeeForm from "./components/EmployeeForm/EmployeeForm"
import EmployeeCard from "./components/EmployeeCard/EmployeeCard"

function EmployeeApp() {
  return (
    <EmployeeLayout>
      <Routes>
        <Route
          path={EMPLOYEE_APP_ROUTES.CREATE_EMPLOYEE}
          element={<EmployeeForm />}
        />
        <Route
          path={EMPLOYEE_APP_ROUTES.EMPLOYEES}
          element={<EmployeeCard />}
        />
      </Routes>
    </EmployeeLayout>
  )
}
export default EmployeeApp
