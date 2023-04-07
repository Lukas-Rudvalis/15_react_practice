import Container from '../components/ui/Container';
import PostsList from '../components/postsComponents/PostsList';
import useGetData from '../hooks/useGetData';
import Alert from '../components/ui/Alert';
import styled from 'styled-components';
import { useState } from 'react';
import { getTags } from '../components/utils/helpers';

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

  function handleTagFilterChange(e) {
    console.log('e.target.value ===', e.target.value);
    setActiveFilterVal(e.target.value);
  }

  let filteredPosts = [];
  if (activeFilterVal !== 'all') {
    filteredPosts = allPosts.filter((post) =>
      post.tags.includes(activeFilterVal),
    );
  } else filteredPosts = allPosts;

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
          {getTags(allPosts).map((tag) => (
            <div key={tag}>
              <input
                onChange={handleTagFilterChange}
                type="radio"
                name="tagFilter"
                // checked={activeFilterVal}
                value={tag}
                id={tag}
              />
              <label htmlFor={tag}>{tag.trim()}</label>
            </div>
          ))}
        </Flex>
      </fieldset>
      {/* 5 sukrti ir atvaizduoti styled komponenta jei errorText yra ne tuscia kabute */}
      <PostsList posts={filteredPosts} />
    </Container>
  );
}

export default PostsPage;
