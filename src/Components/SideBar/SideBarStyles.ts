import styled from 'styled-components';

export const SideContent = styled.aside`
  height: 100vh;
  display: flex;
  background: url('../../assets/assets/layered-steps-haikei\ \(3\).svg') fixed center;
  padding: 30px;
  /* width: 20%; */
  width: 23rem;
  background-color: #0B0113;
  border-top-right-radius: 50px;
  color: #ddd;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 99;
  h2 {
    align-self: flex-start;
    margin-bottom: 100px;
  }

  @media screen and (max-width: 1200px){
   width: 30%;
  }

  @media screen and (max-width: 900px){
  border-top-right-radius: 0px;
    flex-direction: column;
    height: 17vh;
    align-items: center;
    width: 100%;
    padding: 10px;
    border-bottom-right-radius:50px;
    border-bottom-left-radius:50px ;
    margin-left: -15px;
    padding: 10px;
    justify-content: space-around;
    h2 {
    align-self: flex-start;
    margin-bottom: 5px;
    margin-left: 17px;
  }
  }
`;

export const SideButton = styled.button`
  width: 300px;
  height: auto;
  padding: 5px;
  background-color: ${({ color }) => color};
  color: #aaa;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 25px;
  margin-bottom: 0.2rem;
  padding-left: 15px;
  h3 {
    margin-left: 10px;
    font-size: 22px;
    margin-top: 25px;
  }
  :hover {
    background-color: #0B0113;
  }

  @media screen and (max-width: 900px){
    background-color: #0B0113;
    height: 30px;
    font-size: 20px;
    width: 30%;
    padding: 8px;
    background-color: none;
    margin-right: -30px;
    color: ${({ color }) => (color === '#29282E' ? 'white' : color)};
   h3 {
    font-size: 16px;
    text-align: start;
    margin-top: 20px;
   }
  }
`;

export const ButtonArea = styled.section`
  @media screen and (max-width: 900px){
  flex-direction: row;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-self: flex-start;
  }
  width: 100%;
`;

export const EuArea = styled.section`
  position: absolute;
  bottom: 100px;
  left: 10px;
  display: flex;
  flex-direction: column;
  width: 500px;
  @media screen and (max-width: 900px){
    bottom:120px;
    left: 0px;
    left: 65%;
  }
`;

export const EuText = styled.span`
  @media screen and (max-width: 900px){
    display: none;
  }
`;

export const EuRedes = styled.a`
  background-color: #29282E;
  color: white;
  font-size: 24px;
  width: 40px;
  padding: 10px;
  border-radius: 6px;
  align-items: center;
  margin: 5px;
  justify-content: center;
  display: flex;

  :hover {
    background-color: #153BA3;
    cursor: pointer;
  }
`;

export const EuRedesArea = styled.section`
  display: flex;
  margin-left: -10px;
`;
