import styled from 'styled-components';

export const FormContainet = styled.form`
  display: flex;
  width: 100%;
  height: auto;
  border: #fff;
  background-color: #212026;
  padding: 20px;
  border-radius: 10px;
  h2 {
    color: #fff;
  }
  select {
    width: 250px;
    height: 40px;
    padding: 10px;
    background-color: #3d3b49;
    color: #aaa;
    border-radius: 6px;
    border: none;
    font-size:18px;

  @media screen and (max-width: 900px){
    width: 380px;
    margin-bottom: 20px;
  }
  }

  @media screen and (max-width: 1600px){
    flex-wrap: wrap;
  }

  @media screen and (max-width: 900px){
    align-items: center;
    justify-content: center;
  }
`;

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 20px;
  color: #aaa;
  font-weight: 600;

  .currentDateBtn {
    width: 70px;
    top: -37px;
    height: 35px;
    position: relative;
    align-self: flex-end;
    background-color: #5338BF;
    color: white;
    font-weight: 600;
  }

  .currentDateBtn:hover {
    background-color: #2f216b;
    border:none
  }

  @media screen and (max-width: 900px){
    .currentDateBtn {
    top: -53px;
  } 
  }
`;

export const InputForm = styled.input`
  width: 250px;
  height: 30px;
  padding: 5px;
  background-color: #3d3b49;
  font-size:18px;
  color: #aaa;
  border-radius: 6px;

  @media screen and (max-width: 900px){
    width: 370px;
    margin-bottom: 15px;
  }
`;

export const FormButtonAdd = styled.button`
  width: 150px;
  height: 40px;
  padding: 5px;
  margin: 16px;
  font-weight: 700;
  background-color: #5338BF;
  border-radius: 6px;
  font-size: 20px;
  color: white;
  @media screen and (max-width: 1600px){
    margin: 0px;
    margin-top: 25px;
  }
  @media screen and (max-width: 900px){
    width: 380px;
    margin: 50px;
  }
`;
