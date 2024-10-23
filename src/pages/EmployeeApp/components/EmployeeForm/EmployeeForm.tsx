import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { EmployeeContext } from "pages/EmployeeApp/components/EmployeeLayout/EmployeeLayout";
import { EMPLOYEE_APP_ROUTES } from "constants/routes";

import { EmployeeFormContainer, InputsContainer } from "./styles";
import { EMPLOYEE_FORM_NAMES } from "./types";
import { UserDataProps } from "pages/EmployeeApp/types";

function EmployeeForm() {
  const { setUserData } = useContext(EmployeeContext);

  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    [EMPLOYEE_FORM_NAMES.NAME]: Yup.string()
      .required("First name is required field")
      .min(2, "The minimum first name length is 2")
      .max(50, "The maximum first name length is 50"),
    [EMPLOYEE_FORM_NAMES.SURNAME]: Yup.string()
      .required("Last name is required field")
      .max(15, "The maximum last name length is 15"),
    [EMPLOYEE_FORM_NAMES.AGE]: Yup.string()
      .required("Age is required field")
      .min(1, "The minimum age length is 1")
      .max(3, "The maximum age length is 3"),
    [EMPLOYEE_FORM_NAMES.JOB_POSITION]: Yup.string().max(
      30,
      "The maximum job position length is 30"
    ),
  });

  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FORM_NAMES.NAME]: "",
      [EMPLOYEE_FORM_NAMES.SURNAME]: "",
      [EMPLOYEE_FORM_NAMES.AGE]: "",
      [EMPLOYEE_FORM_NAMES.JOB_POSITION]: "",
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: (values) => {
      setUserData((prevValue:UserDataProps[]) => {
        return[...prevValue, values]
      });
      navigate(EMPLOYEE_APP_ROUTES.EMPLOYEES);
    },
  });

  return (
    <EmployeeFormContainer onSubmit={formik.handleSubmit}>
      <InputsContainer>
        <Input
          id="employeeform-name"
          label="Name*"
          placeholder="Enter your first name"
          name={EMPLOYEE_FORM_NAMES.NAME}
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <Input
          id="employeeform-surname"
          label="Surname*"
          placeholder="Enter your last name"
          name={EMPLOYEE_FORM_NAMES.SURNAME}
          type="text"
          value={formik.values.surname}
          onChange={formik.handleChange}
          error={formik.errors.surname}
        />
        <Input
          id="employeeform-age"
          label="Age*"
          placeholder="Enter your age"
          name={EMPLOYEE_FORM_NAMES.AGE}
          type="number"
          value={formik.values.age}
          onChange={formik.handleChange}
          error={formik.errors.age}
        />
        <Input
          id="employeeform-jobposition"
          label="Job Position"
          placeholder="Enter your job position"
          name={EMPLOYEE_FORM_NAMES.JOB_POSITION}
          type="text"
          value={formik.values.jobPosition}
          onChange={formik.handleChange}
          error={formik.errors.jobPosition}
        />
      </InputsContainer>
      <Button type="submit" name="Create" />
    </EmployeeFormContainer>
  );
}
export default EmployeeForm;
