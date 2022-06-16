import React from 'react';
import styled from 'styled-components';
import { Card } from '../layout/card';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Button } from 'app/components/Button/Button';
import * as Yup from 'yup';

interface Props {
  children: React.ReactNode;
}

const Login = (props: Props) => {
  return (
    <Card>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={Yup.object({
          username: Yup.string()
            .max(15, '* Must be 15 characters or less')
            .required('* Required'),
          password: Yup.string()
            .max(20, '* Must be 20 characters or less')
            .required('* Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 4000);
        }}
      >
        <StyledForm>
          <div>
            <label htmlFor="username">UserName</label>
            <StyledField name="username" type="text" />
            <StyledErrorMessage name="username" component="p" />
          </div>

          <div>
            <label htmlFor="password">Passcode</label>
            <StyledField name="password" type="password" />
            <StyledErrorMessage name="password" component="p" />
          </div>

          <LoginButton type="submit">Submit</LoginButton>
        </StyledForm>
      </Formik>
    </Card>
  );
};

const LoginButton = styled(Button)`
  color: white;
  background-color: var(--bs-orange);
  margin: 2rem 0 0.5rem;
  border: none;
  border-radius: 3rem;
  width: 100%;
  caret-color: transparent;
`;

const StyledField = styled(Field)`
  border-width: 0.1rem;
  border-color: var(--bs-body-color);
  width: 100%;
`;

const StyledForm = styled(Form)`
  font-size: 1rem;
  color: #4199e1;

  input {
    line-height: 1.4;
    border-color: var(--bs-gray-200);
    border-width: 0.1rem;
    border-radius: 0.5rem;
    padding: 0.1rem 0.5rem;
    &:hover,
    &:focus,
    &:active,
    &:active:focus {
      outline: 2px solid var(--bs-gray-500);
      outline-offset: 1px;
    }
  }
`;
const StyledErrorMessage = styled(ErrorMessage)`
  color: var(--bs-danger);
`;

export default Login;
