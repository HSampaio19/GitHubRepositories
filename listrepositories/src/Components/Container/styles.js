import styled from 'styled-components';

const Container = styled.div`
  background: #fff;
  max-width: 700px;
  padding: 30px;
  margin: 80px auto;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  h1 {
    margin: 0 15px;
    font-size: 25px;
    display: flex;
    align-items: center;
    flex-direction: row;

    svg {
      margin-right: 10px;
    }
  }
`;

export default Container;
