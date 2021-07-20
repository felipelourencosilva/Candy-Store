import styled from 'styled-components';
import { IoClose } from "react-icons/io5";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 70%;
  height: 5%;

  margin-top: 20px;
  padding: 0 20px;

  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 4px 4px 0 #A4DDE0, 5px 5px black, 4px 5px black, 5px 4px black;

  div {
    display: flex;
    align-items: center;

    p {
      margin-right: 5px;
    }
  }
  
  @media (max-width: 700px) {
      flex-direction: column;
      height: 15%;
      
      div {
        align-self: center;
      }
  }
`

export const DeleteIcon = styled(IoClose)`
  font-size: 22px;
  color: #A4DDE0;
  cursor: pointer;
`