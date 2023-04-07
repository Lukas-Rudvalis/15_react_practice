import React, { useEffect, useState } from 'react';
import Container from '../components/ui/Container';
import PostsList from '../components/postsComponents/PostsList';
import axios from 'axios';

function PostsPage() {
  // 2 sukrti state klaidai errorPosts
  const [allPosts, setAllPosts] = useState([]);

  // 4 sukurti klaidos texto kintamaji errorText
  // errorText yra lygus tusciai kabutei, bet jei errorPosts yra lygus ERR_NETWORK
  // tada jis lygus "There was a network error, try agail later"

  useEffect(() => {
    axios
      .get('http://localhost:5000/posts')
      .then((resp) => {
        console.log('resp.data ===', resp.data);
        setAllPosts(resp.data);
      })
      .catch((err) => {
        console.warn('axios.get', err);
        // console.log('err.code ===', err.code);
        // 1 jei err.code yra lygus ERR_NETWORK
        // 3 tai mes nustatom sita koda i errorPosts state
      });
  }, []);

  return (
    <Container>
      <h1>PostsPage</h1>
      <p>Welcome to PostsPage</p>
      {/* 5 sukrti ir atvaizduoti styled komponenta jei errorText yra ne tuscia kabute */}
      <PostsList posts={allPosts} />
    </Container>
  );
}

export default PostsPage;
