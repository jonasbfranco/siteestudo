import styled from 'styled-components';

export const Background = styled.div`
  backgroud-color: #272727;
  height: 60px;
  color: #fff;
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    text-transform: uppercase;
    font-family: 'Anton', Arial, Helvetica, sans-serif;
    font-size: 30px;
    color: #bb9878;
  }
  li {
    margin-left: 25px;
  }
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  > svg {
    display: none;
  }
  @media (max-width: 700px) {
    width: 90vw;
    > svg {
      display: block;
    }
    ul {
      display: none;
    }
  }
`;
