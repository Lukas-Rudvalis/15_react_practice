import React from 'react';
import PropTypes from 'prop-types';
import Card from '../ui/Card';
import Button from '../ui/Button.styled';
import { useSelector } from 'react-redux';

function CommentsList({ list, onDeleteComment }) {
  const email = useSelector((state) => state.auth.email);
  return (
    <div>
      {list.map((obj) => (
        <Card key={obj.id}>
          <p>{obj.authorEmail}</p>
          <p>{obj.text}</p>
          {obj.authorEmail === email && (
            <Button onClick={() => onDeleteComment(obj.id)}>Delete</Button>
          )}
        </Card>
      ))}
    </div>
  );
}

CommentsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  onDeleteComment: PropTypes.func,
};

export default CommentsList;
