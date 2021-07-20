import React from "react";
import { useList } from "../../hooks/useList";
import { Container, DeleteIcon } from './styles'

export function CartCard(props) {
  const { cartList, setCartList } = useList();

  function handleDeleteItemFromList() {
    const newList = cartList.filter(cartItem => cartItem.id !== props.id);

    setCartList(newList)
  }

  return (
    <Container key={props.id}>
      <div>
        <p>{props.name}</p>
      </div>
      <div>
        <p>Amount: </p>
        <p>{props.amount}</p>
      </div>
      <div>
        <p>Price: </p>
        <p>${props.price * props.amount}</p>
      </div>
      <div>
        <DeleteIcon 
          onClick={handleDeleteItemFromList}
        />
      </div>
    </Container>
  );
}
