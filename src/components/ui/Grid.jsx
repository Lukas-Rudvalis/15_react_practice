import PropTypes from 'prop-types';
import styled from 'styled-components';

const SGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
  gap: 16px;
`;

function Grid({ children, cols = 3 }) {
  return <SGrid cols={cols}>{children}</SGrid>;
}
Grid.propTypes = {
  cols: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Grid;
