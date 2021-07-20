import styled from 'styled-components';
import { BiArrowBack } from "react-icons/bi";


export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto 20%;
  padding: 20px;
  height: calc(100vh - 120px);
  
  background: white;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 5px 5px 0 #A4DDE0, 6px 6px black, 5px 6px black, 6px 5px black;

  @media (max-width: 900px) {
    margin: auto 10%;
  }
`

export const BackIcon = styled(BiArrowBack)`
  align-self: flex-start;
  position: absolute;
  margin: 10px;

  font-size: 20px;
  color: #A4DDE0;
  cursor: pointer;
`

export const FinishCartButton = styled.button`
  position: absolute;
  bottom: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 30%;
  height: 3%;

  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 3px 3px 0 #A4DDE0, 4px 4px black, 3px 4px black, 4px 3px black;

  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    transform: translate(4px, 4px);
    box-shadow: none;
  }
`

export const ModalCheckout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;

  min-height: 100vh;
  width: 100vw;
  background: rgba(255, 255, 255, 0.7);

  > div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    height: 20vh;
    width: 40vh;

    border-radius: 5px;
    background: white;

    border: 1px solid black;
    box-shadow: 4px 4px 0 #A4DDE0, 5px 5px black, 4px 5px black, 5px 4px black;

    p {
      margin-top: 10px;
    }

    div {
      height: 20%;
      width: 100%;

      button {
        height: 100%;
        width: 50%;

        border: none;
        border-top: 1px solid black;

        font-weight: 500;
        cursor: pointer;
        transition: 0.3s ease;

        &:hover {
          filter: brightness(0.8);
        }

        &:first-child {
          background: rgba(226, 141, 202, 0.3);
          border-right: 1px solid black;
        }

        &:last-child {
          background: rgba(164, 221, 224, 0.3);
        }
      }
    }
  }
`