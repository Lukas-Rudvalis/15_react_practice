import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../ui/Button.styled';
import { Link } from 'react-router-dom';

function SinglePost({ post, full = false, onDeletePost }) {
  return (
    <Card>
      {!full && <Title>{post.title}</Title>}
      <Body>{full ? post.body : post.body?.slice(0, 70)}</Body>
      <Footer>
        <Author>{post.author}</Author>
        <Tags>{post.tags?.join(', ')}</Tags>
        <Date>{post.date}</Date>
      </Footer>
      <Control>
        {!full && <Button onClick={() => onDeletePost(post.id)}>Delete</Button>}
        {full && <Link to={`/posts`}>Go back</Link>}
        {!full && <Link to={`/posts/${post.id}`}>Read more...</Link>}
      </Control>
    </Card>
  );
}

SinglePost.propTypes = {
  post: PropTypes.object,
  full: PropTypes.bool,
  onDeletePost: PropTypes.func,
};

const Control = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Card = styled.div`
  border: 1px solid #e2e8f0;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Body = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Author = styled.span`
  font-size: 0.875rem;
  color: #4a5568;
  margin-right: 10px;
`;

const Tags = styled.span`
  font-size: 0.875rem;
  color: #4a5568;
  margin-right: 10px;
`;

const Date = styled.span`
  font-size: 0.875rem;
  color: #4a5568;
`;

export default SinglePost;
