import styled from 'styled-components';

export const CardMainContainer = styled.section`
  width: 380px;
  height: 6rem;
  border-radius: 20px;
  margin-right: 20px;
  margin-top: 10px;
  background-color: ${({ color }: any) => color};
  align-items: flex-start;
  padding: 10px;
  display: flex;
  flex-direction: column;
  color: #fff;

  h1 {
    color: white;
    font-weight: 900;
    font-size: 40px;
    margin-top: 0px;
  }
  span {
    color: white;
    margin-top: -50px;
  }

  @media screen and (max-width: 900px){
    width: 160px;
    height: 6rem;
    align-self: flex-start;

    h1 {
      font-size: 30px;
      color: #fff;
    }

    span {
      margin-top: -40px;
    }
  }
`;

export const CardText = styled.span`
  color: #fff;
  margin-top: -50px;
`;
