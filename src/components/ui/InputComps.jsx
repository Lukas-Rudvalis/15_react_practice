import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  font-size: 16px;
  padding: 8px 12px;
  border: 1px solid ${(props) => (props.error ? 'red' : '#ccc')};
  border-radius: 4px;
  outline: none;

  &:focus {
    box-shadow: 0 0 5px ${(props) => (props.error ? 'red' : '#333')};
  }
`;

const TextArea = styled.textarea`
  font-size: 16px;
  padding: 8px 12px;
  border: 1px solid ${(props) => (props.error ? 'red' : '#ccc')};
  border-radius: 4px;
  outline: none;
  min-height: 6em;

  &:focus {
    box-shadow: 0 0 5px ${(props) => (props.error ? 'red' : '#333')};
  }
`;

const Error = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 4px;
`;

const InputField = ({ label, error, type = 'text', ...rest }) => {
  //

  const isTextArea = type === 'texarea' ? true : false;
  return (
    <InputWrapper>
      <Label>{label}</Label>
      {isTextArea ? (
        <TextArea error={error} placeholder={label} {...rest} />
      ) : (
        <Input error={error} placeholder={label} type={type} {...rest} />
      )}

      {error && <Error>{error}</Error>}
    </InputWrapper>
  );
};
InputField.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string,
};

export default InputField;
