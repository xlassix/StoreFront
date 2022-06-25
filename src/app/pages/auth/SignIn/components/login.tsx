import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Card } from '../layout/card';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Button } from 'app/components/Button/Button';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { apiCall } from 'utils/axios';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useHistory } from 'react-router';

interface Props {
  // children: React.ReactNode;
}

const Login = (props: Props) => {
  const setUser = useStoreActions((actions: any) => actions.setUser);
  const history = useHistory();
  const user = useStoreState((state: any) => state.user);
  const { t, i18n } = useTranslation();
  console.log(i18n);

  useEffect(() => {
    // if (user.isAuthenticated) {
    //   history.push('/');
    // }
  }, [history]);

  return (
    <Card>
      <Formik
        initialValues={{ UserName: '', Password: '' }}
        validationSchema={Yup.object({
          UserName: Yup.string()
            .trim()
            .matches(/^(BO-)|(FA-)/, 'Invalid Prefix ')
            .max(15, '* Must be 15 characters or less')
            .required('* Required'),
          Password: Yup.string()
            .max(20, '* Must be 20 characters or less')
            .required('* Required'),
        })}
        onSubmit={async (values, { setErrors }) => {
          try {
            let UserType = values.UserName.startsWith('BO-') ? 1 : 2;
            let AuthType = values.UserName.includes('@') ? 5 : 10;
            console.log({ ...values, UserType, AuthType });
            const res = await apiCall(
              'POST',
              '/api/v2/MultiwarehouseDataApi/UserLogin',
              {
                ...values,
                UserType,
                AuthType,
                UserName: values.UserName.slice(3),
              },
              null,
              true,
            );
            if (res.data) {
              console.log(res.data);
              // setUser(res);
              // history.push('/store');
            } else {
              setErrors({ Password: res.Message });
            }
          } catch (error: any) {
            console.log('Error', error);
          }
        }}
      >
        <StyledForm>
          <div>
            <label htmlFor="UserName">UserName</label>
            <StyledField name="UserName" type="text" />
            <StyledErrorMessage name="UserName" component="p" />
          </div>

          <div>
            <label htmlFor="Password">Passcode</label>
            <StyledField name="Password" type="Password" />
            <StyledErrorMessage name="Password" component="p" />
          </div>

          <LoginButton type="submit">{t('storeFront.sign')}</LoginButton>
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
    outline: 1px solid var(--bs-gray-300);
    border: none;
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
