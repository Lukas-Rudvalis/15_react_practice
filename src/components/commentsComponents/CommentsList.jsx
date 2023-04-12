import React from 'react';
import PropTypes from 'prop-types';
import Card from '../ui/Card';
import { useAuthContext } from '../../store/AuthProvider';
import Button from '../ui/Button.styled';

function CommentsList({ list, onDeleteComment }) {
  const { email } = useAuthContext();
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
