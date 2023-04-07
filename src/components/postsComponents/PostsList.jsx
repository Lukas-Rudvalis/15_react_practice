import React from 'react';
import SinglePost from './SinglePost';
import PropTypes from 'prop-types';
import Grid from '../ui/Grid';
function PostsList({ posts }) {
  return (
    <Grid cols={2}>
      {posts.map((post) => (
        <SinglePost key={post.id} post={post} />
      ))}
    </Grid>
  );
}

PostsList.propTypes = {
  posts: PropTypes.array,
};

export default PostsList;
