import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from '../../store/AuthProvider';
import Button from '../ui/Button.styled';

const navData = [
  { id: 1, to: '/', title: 'Home' },
  { id: 2, to: '/contacts', title: 'Contacts' },
  // { id: 3, to: '/posts', title: 'Posts' },
  // { id: 4, to: '/posts/new', title: 'Add post' },
];

function Header() {
  const ctx = useAuthContext();
  // console.log('ctx ===', ctx);
  // console.log('isLoggedIn ===', isLoggedIn);
  return (
    <StyledHeader>
      <Flex className="container">
        <Nav>
          {navData.map(({ id, to, title }) => (
            <SiteLink end key={id} to={to}>
              {title}
            </SiteLink>
          ))}
          {ctx.isLoggedIn && (
            <>
              <SiteLink end to={'/posts'}>
                Posts
              </SiteLink>
              <SiteLink to={'/posts/new'}>Add post</SiteLink>
            </>
          )}
        </Nav>
        <Nav>
          {!ctx.isLoggedIn && <SiteLink to={'/login'}>Login</SiteLink>}
          {ctx.isLoggedIn && (
            <Flex>
              <Email>{ctx.email}</Email>
              <Link to={'/'}>
                <Button onClick={ctx.logout}>Loguot</Button>
              </Link>
            </Flex>
          )}
        </Nav>
      </Flex>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #333;
  color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const SiteLink = styled(NavLink)`
  display: block;
  padding: 0.5em 1em;
  background-color: #333;

  &:hover {
    background-color: #aeaeae;
  }

  &.active {
    text-decoration: underline;
    background-color: tomato;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Email = styled.p`
  font-size: 1.2rem;
  margin-right: 1rem;
`;

export default Header;
