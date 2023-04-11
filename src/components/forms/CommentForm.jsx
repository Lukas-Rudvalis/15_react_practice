import React from 'react';
import styled from 'styled-components';
import InputField from '../ui/InputComps';
import { useFormik } from 'formik';
import { SubmitButton } from '../ui/Button.styled';
import { useAuthContext } from '../../store/AuthProvider';
import PropTypes from 'prop-types';

function CommentForm({ postId, onNewComment }) {
  const { email } = useAuthContext();
  const formik = useFormik({
    initialValues: {
      author: email,
      text: '',
    },
    validate(values) {
      const errors = {};
      if (!values.text) {
        errors.text = 'Text is Required';
      } else if (values.text.length < 10) {
        errors.text = 'Must be min 10 characters long';
      }
      return errors;
    },
    onSubmit(values) {
      // console.log('values ===', values);
      const commentObj = {
        authorEmail: values.author,
        text: values.text,
        postId,
      };
      onNewComment(commentObj);
    },
  });

  return (
    <Wrap>
      <Title>Comment here</Title>
      <form onSubmit={formik.handleSubmit}>
        <InputField
          value={formik.values.author}
          onChange={formik.handleChange}
          name={'author'}
          type="text"
          label={'Author'}
          disabled={true}
        />
        <InputField
          value={formik.values.text}
          onChange={formik.handleChange}
          name={'text'}
          type="texarea"
          label={'Comment Text'}
          error={formik.errors.text}
        />
        <SubmitButton>Comment</SubmitButton>
      </form>
    </Wrap>
  );
}

CommentForm.propTypes = {
  postId: PropTypes.string,
  onNewComment: PropTypes.func,
};

const Wrap = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;
const Title = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export default CommentForm;
// author - supildytas automatiskai kaip email
// , text, - validuojamas kad butu privalomas ir maziausiai 10 raidziu
// formik,
// <InputField />
// onSubmit iskonsoliti objekta su author ir text
