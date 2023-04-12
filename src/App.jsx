import './styles/reset.css';
import './styles/App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ConactPage';
import Header from './components/layout/Header';
import PostsPage from './pages/PostsPage';
import NewPostPage from './pages/NewPostPage';
import SinglePostPage from './pages/SinglePostPage';
import NotAllowed from './pages/NotAllowed';
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector((state) => state.auth.isLoggedIn);
  // App.jsx prideti dinamini route SinglePostPage
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route
          path={'/login'}
          element={
            <>
              {!isAuth && <LoginPage />}
              {isAuth && <Navigate to="/posts" />}
            </>
          }
        />
        <Route path={'/contacts'} element={<ContactPage />} />
        <Route
          path={'/posts'}
          element={
            <>
              {isAuth && <PostsPage />}
              {!isAuth && <Navigate to="/not-allowed" />}
            </>
          }
        />
        <Route
          path={'/posts/:postId'}
          element={
            <>
              {isAuth && <SinglePostPage />}
              {!isAuth && <Navigate to="/not-allowed" />}
            </>
          }
        />
        <Route
          path={'/posts/new'}
          element={
            <>
              {isAuth && <NewPostPage />}
              {!isAuth && <Navigate to="/not-allowed" />}
            </>
          }
        />
        <Route path={'/not-allowed'} element={<NotAllowed />} />
      </Routes>
    </div>
  );
}
export default App;
