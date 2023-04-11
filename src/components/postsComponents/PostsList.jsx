import React from 'react';
import SinglePost from './SinglePost';
import PropTypes from 'prop-types';
import Grid from '../ui/Grid';
function PostsList({ posts, onDeletePost }) {
  return (
    <Grid cols={2}>
      {posts.map((post) => (
        <SinglePost key={post.id} post={post} onDeletePost={onDeletePost} />
      ))}
    </Grid>
  );
}

PostsList.propTypes = {
  posts: PropTypes.array,
  onDeletePost: PropTypes.func,
};

export default PostsList;
