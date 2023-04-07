import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AlertWrapper = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  background-color: ${({ type }) =>
    type === 'success' ? '#d4edda' : type === 'danger' ? '#f8d7da' : '#cce5ff'};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem;
  background-color: transparent;
  border: none;
  color: #000;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #ff0000;
  }
`;

const Alert = ({ type = 'info', children }) => {
  const [show, setShow] = useState(true);

  if (!show) {
    return null;
  }

  return (
    <AlertWrapper type={type}>
      {children}
      <CloseButton onClick={() => setShow(false)}>&times;</CloseButton>
    </AlertWrapper>
  );
};
Alert.propTypes = {
  type: PropTypes.oneOf(['info', 'danger', 'success']),
  children: PropTypes.string,
};

export default Alert;
