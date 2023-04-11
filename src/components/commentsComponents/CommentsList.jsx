import React from 'react';
import PropTypes from 'prop-types';
import Card from '../ui/Card';

function CommentsList({ list }) {
  return (
    <div>
      {list.map((obj) => (
        <Card key={obj.id}>
          <p>{obj.authorEmail}</p>
          <p>{obj.text}</p>
        </Card>
      ))}
    </div>
  );
}

CommentsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

export default CommentsList;
