import React, { useState } from 'react';
import { SubmitButton } from '../ui/Button.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import axios from 'axios';
import InputField from '../ui/InputComps';
import { useAuthContext } from '../../store/AuthProvider';

const url = 'https://reqres.in/api/login';

const ErrorMsg = styled.p`
  color: tomato;
`;

const inputsData = [
  { id: 1, type: 'text', label: 'Email', name: 'email' },
  { id: 2, type: 'password', label: 'Password', name: 'password' },
];

function LoginForm() {
  const authCtx = useAuthContext();
  // console.log('authCtx ===', authCtx);
  const [beError, setBeError] = useState('');

  const formik = useFormik({
    initialValues: {
      email: 'emma.wong@reqres.in',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(4).trim().required(),
    }),
    onSubmit: (values) => {
      // console.log('form values ===', values);
      // clear errors
      setBeError('');
      // siusti prisijungimui
      sendLoginData(values);
    },
  });
  // console.log('formik.errors ===', formik.errors);

  function sendLoginData(loginObj) {
    axios
      .post(url, loginObj)
      .then((resp) => {
        // console.log('resp ===', resp.data);
        // irasom i contexta email, token
        const token = resp.data.token;
        const email = loginObj.email;
        authCtx.login(token, email);
      })
      .catch((err) => {
        console.warn('sendLoginData error', err);
        // console.log('err.response.data.error ===', err.response.data.error);
        setBeError(err.response.data.error);
      });
  }

  return (
    <>
      {beError && <ErrorMsg>{beError}</ErrorMsg>}
      <form onSubmit={formik.handleSubmit}>
        {inputsData.map((iObj) => (
          <InputField
            key={iObj.id}
            value={formik.values[iObj.name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type={iObj.type}
            label={iObj.label}
            name={iObj.name}
            error={formik.touched[iObj.name] && formik.errors[iObj.name]}
          />
        ))}

        {/* <InputField
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="password"
          placeholder="Password"
          label="Password"
          name="password"
          error={formik.touched.password && formik.errors.password}
        /> */}

        <SubmitButton>Login</SubmitButton>
      </form>
      <div>
        <p>email: {formik.values.email}</p>
        <p>password: {formik.values.password}</p>
      </div>
    </>
  );
}

export default LoginForm;
