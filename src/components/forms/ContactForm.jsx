import React from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';
import axios from 'axios';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const StyledTextArea = styled.textarea`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 0.25rem;
  border: none;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #0069d9;
  }
  &:disabled {
    background-color: #ddd;
    color: #aaa;
    cursor: not-allowed;
  }
`;

function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      sendEmail(values, setSubmitting);

      // setTimeout(() => {
      //   alert(JSON.stringify(values, null, 2));
      //   resetForm();
      //   setSubmitting(false);
      // }, 1000);
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Name is required';
      }

      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = 'Invalid email format';
      }

      if (!values.message) {
        errors.message = 'Message is required';
      }

      return errors;
    },
  });

  function sendEmail(emailValuesObj, setSubmitting) {
    const emailTo = 'rudwalis@gmail.com';
    axios.defaults.headers.post['Content-type'] = 'application/json';
    axios
      .post(`https://formsubmit.co/ajax/${emailTo}`, {
        formTitle: 'FormSubmit form my form',
        ...emailValuesObj,
      })
      .then((resp) => console.log('resp ===', resp))
      .catch((error) => console.warn(error))
      .finally(() => setSubmitting(false));
  }

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledLabel htmlFor="name">Name:</StyledLabel>
      <StyledInput
        type="text"
        id="name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <StyledLabel htmlFor="email">Email:</StyledLabel>
      <StyledInput
        type="email"
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <StyledLabel htmlFor="message">Message:</StyledLabel>
      <StyledTextArea
        id="message"
        name="message"
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.message && formik.errors.message ? (
        <div>{formik.errors.message}</div>
      ) : null}{' '}
      <StyledButton type="submit" disabled={formik.isSubmitting}>
        {formik.isSubmitting ? 'Submitting...' : 'Submit'}
      </StyledButton>
    </StyledForm>
  );
}

export default ContactForm;
