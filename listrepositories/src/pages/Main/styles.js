import styled, { keyframes } from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin-top: 30px;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg)
  }

  to{
    transform: rotate(360deg)
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;

    svg {
      animation: ${rotate} 2s linear infinite;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    display: flex;
    flex-direction: row;
    padding: 15px 0;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;

    & + li {
      border-top: 1px solid rgba(0, 0, 0, 0.2);
    }

    span {
      margin: 0 15px;
    }

    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
