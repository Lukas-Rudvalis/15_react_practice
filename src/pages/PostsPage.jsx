import Container from '../components/ui/Container';
import PostsList from '../components/postsComponents/PostsList';
import useGetData from '../hooks/useGetData';
import Alert from '../components/ui/Alert';
import styled from 'styled-components';
import { useState } from 'react';

const Wrap = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;
const Flex = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

function PostsPage() {
  const [activeFilterVal, setActiveFilterVal] = useState('all');
  // 2 sukrti state klaidai errorPosts
  const [allPosts, setAllPosts, error, isLoading] = useGetData(
    'http://localhost:5000/posts',
  );

  if (error) {
    // console.log('error ===', error);
  }

  const networkError = error.code === 'ERR_NETWORK';

  // 4 sukurti klaidos texto kintamaji errorText
  // errorText yra lygus tusciai kabutei, bet jei errorPosts yra lygus ERR_NETWORK
  // tada jis lygus "There was a network error, try agail later"

  function getTags() {
    const allTags2dArr = allPosts.map((obj) => obj.tags);
    const allTags1dArr = [].concat(...allTags2dArr);
    const uniqueTags = ['all', ...new Set(allTags1dArr)];
    return uniqueTags;
  }

  return (
    <Container>
      {isLoading && <Alert>Loading...</Alert>}
      {networkError && (
        <Alert type={'danger'}>Ivyko klaida, bandykite veliau</Alert>
      )}
      <Wrap>
        <h1>PostsPage</h1>
        <p>Welcome to PostsPage</p>
      </Wrap>
      <fieldset>
        <legend>Filter by</legend>
        <Flex>
          {getTags().map((tag) => (
            <div key={tag}>
              <input
                onChange={() => setActiveFilterVal(tag)}
                type="radio"
                name="tags"
                value={tag}
                id={tag}
              />
              <label htmlFor={tag}>{tag.trim()}</label>
            </div>
          ))}
        </Flex>
      </fieldset>
      {/* 5 sukrti ir atvaizduoti styled komponenta jei errorText yra ne tuscia kabute */}
      <PostsList posts={allPosts} />
    </Container>
  );
}

export default PostsPage;
