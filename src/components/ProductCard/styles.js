import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 200px;
  height: 230px;
  padding: 10px;

  background: white;
  border: 1px solid black;
  border-radius: 5px;

  box-shadow: 5px 5px 0 #A4DDE0, 6px 6px black, 4px 6px black, 6px 4px black;

  img {
    width: 35%;
    height: 35%;
  }

  p {
    color: #3F4A4A;
  }
`

export const Amount = styled.p`
  font-size: 28px;
  span {
    color: #A4DDE0;
    font-size: 16px;
  }
`

export const ItemAmount = styled.form`

  > button {
    margin-top: 10px;
    height: 22px;
    width: 110px;

    background: white;
    border: 1px solid black;
    border-radius: 3px;
    box-shadow: 2px 2px 0 #A4DDE0, 3px 3px black, 2px 3px black, 3px 2px black;
    
    font-weight:  500;
    cursor: pointer;

    transition: 0.2s ease;

    &:hover {
      filter: brightness(0.9);
    }


    &:active {
      transform: translate(3px, 3px);
      box-shadow: none;
    }
  }

  div {
    display: flex;
    justify-content: center;

    button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 20px;
      color: #3F4A4A;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      
      height: 28px;
      width: 28px;

      background: #A4DDE0;
      border-radius: 5px;
      border: 1px solid black;
      margin: 0 10px;
    }
  }

`