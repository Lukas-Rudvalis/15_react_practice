import React from 'react';
import CommentForm from '../forms/CommentForm';
import CommentsList from './CommentsList';
import useGetData from '../../hooks/useGetData';
import PropTypes from 'prop-types';

function CommentBlock({ postId }) {
  const [allComments, setAllComments, error, isLoading] = useGetData(
    `http://localhost:5000/comments/${postId}`,
  );

  return (
    <div>
      <CommentForm />
      <CommentsList list={allComments} />
    </div>
  );
}

CommentBlock.propTypes = {
  postId: PropTypes.string,
};

export default CommentBlock;
