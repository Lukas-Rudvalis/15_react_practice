import React from 'react';
import Container from '../components/ui/Container';
import { useParams } from 'react-router';
import SinglePost from '../components/postsComponents/SinglePost';
import styled from 'styled-components';
import useGetData from '../hooks/useGetData';

function SinglePostPage() {
  // /posts/:postId - :postId yra url parametras
  const { postId } = useParams();
  // console.log('postId ===', postId);

  // eslint-disable-next-line no-unused-vars
  const [currentPost, setPost, postErr, isLoading] = useGetData(
    `http://localhost:5000/posts/${postId}`,
    {},
  );

  return (
    <Container>
      {postErr && <h2>I vyko klaida</h2>}
      {isLoading && <h2>Loading...</h2>}
      {!isLoading && !postErr && (
        <>
          <Title>{currentPost.title}</Title>
          <SinglePost post={currentPost} full />
        </>
      )}
    </Container>
  );
}

const Title = styled.h1`
  margin: 3rem;
`;

export default SinglePostPage;
