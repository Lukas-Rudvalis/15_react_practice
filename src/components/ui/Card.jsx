import styled from 'styled-components';
import PropTypes from 'prop-types';

const SCard = styled.div`
  padding: 1rem;
  box-shadow: 5px 5px 10px rgb(180, 190, 194);
  border: 1px solid rgb(191, 180, 180);
  border-radius: 5px;
  background-color: snow;
`;

function Card({ children }) {
  return <SCard className="card">{children}</SCard>;
}
Card.propTypes = {
  children: PropTypes.oneOfType(
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ),
};

export default Card;
