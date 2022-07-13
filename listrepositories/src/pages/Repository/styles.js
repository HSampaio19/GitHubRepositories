import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 50px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    border-radius: 50%;
    margin-top: 20px;
  }
  h1 {
    font-size: 24px;
    margin-top: 10px;
  }
  p {
    margin-top: 10px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
  a {
    color: #7159c1;
    text-decoration: none;
    font-size: 14px;
  }
`;

export const IssueList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin-top: 30px;
  justify-content: center;

  li {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 5px;
    padding: 15px 10px;
    justify-content: center;
    border: 1px solid #999;
    border-radius: 4px;
    font-size: 16px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);

    div {
      flex: 1;
      display: flex;
      font-size: 16px;
      margin-left: 15px;
      align-items: center;

      a {
        font-weight: bold;
        color: #333;
        text-decoration: none;

        &:hover {
          color: #7159c1;
        }
      }
      img {
        width: 36px;
        border-radius: 50%;
        border: 2px solid #eee;
      }
    }
    p {
      margin-left: 15px;
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #7159c1;
      color: #ddd;
      border-radius: 2px;
      font-size: 12px;
      font-weight: 600;
      height: 30px;
      padding: 3px 4px;
      margin-left: 15px;
    }
  }
`;
