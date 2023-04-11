import React from 'react';
import CommentForm from '../forms/CommentForm';
import CommentsList from './CommentsList';
import useGetData from '../../hooks/useGetData';
import PropTypes from 'prop-types';
import axios from 'axios';

function CommentBlock({ postId }) {
  const [comments, setComments, error, isLoading] = useGetData(
    `http://localhost:5000/comments/${postId}`,
  );

  function addNewComment(cObj) {
    axios
      .post('http://localhost:5000/comments', cObj)
      .then((resp) => {
        console.log('pavyko resp ===', resp);
        setComments((prevComments) => [...prevComments, cObj]);
        console.log('comments ===', comments);
      })
      .catch((err) => {
        console.warn('NEpavyko err ===', err);
      });
  }

  return (
    <div>
      <CommentForm postId={postId} onNewComment={addNewComment} />
      <CommentsList list={comments} />
    </div>
  );
}

CommentBlock.propTypes = {
  postId: PropTypes.string,
};

export default CommentBlock;
