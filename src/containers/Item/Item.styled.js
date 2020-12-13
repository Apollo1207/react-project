import styled from 'styled-components';

export const ItemWrapper = styled.div`
  display: flex;

  img {
    width: 550px;
    height: 380px;
    margin: 50px 100px;
  }

`;

export const ItemData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 100px auto;

  div {
    width: 250px;
    display: flex;
    justify-content: space-around;
    margin-top: 200px;
    margin-left: 350px;
  }

  h3 {
    margin: 10px 0;
  }
  
`;