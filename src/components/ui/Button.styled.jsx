import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const sizes = {
  small: css`
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  `,
  medium: css`
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  `,
  large: css`
    font-size: 1.2rem;
    padding: 1rem 2rem;
  `,
};

const variants = {
  primary: css`
    color: white;
    background-color: #2196f3;

    &:hover {
      background-color: #1976d2;
    }

    &:active {
      background-color: #0d47a1;
    }
  `,
  secondary: css`
    color: white;
    background-color: #9e9e9e;

    &:hover {
      background-color: #757575;
    }

    &:active {
      background-color: #424242;
    }
  `,
  success: css`
    color: white;
    background-color: #4caf50;

    &:hover {
      background-color: #388e3c;
    }

    &:active {
      background-color: #1b5e20;
    }
  `,
};

const StyledButton = styled.button`
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  ${(props) => sizes[props.size]};
  ${(props) => variants[props.variant]};
`;

function Button({ children, size = 'medium', variant = 'primary', ...rest }) {
  return (
    <StyledButton size={size} variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
}

export const SubmitButton = styled(Button).attrs((props) => ({
  type: 'submit',
}))`
  border-radius: 20px;
`;
Button.propTypes = {
  children: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'success']),
};

export default Button;
