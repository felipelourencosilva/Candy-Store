import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { CartCard } from "../../components/CartCard";
import { useList } from "../../hooks/useList";

import { Container, BackIcon, FinishCartButton, ModalCheckout } from "./styles";

export function Cart() {
  const history = useHistory();
  const { cartList, setCartList } = useList();
  const [ modalCheckout, setModalCheckout] = useState(false);


  function OpenModal() {
    if(cartList.length === 0) {
      alert('You must have at least one item in your cart.')
    } else {
      setModalCheckout(true)
    }
  }

  function Checkout() {
    setCartList([])
    setModalCheckout(false)
  }


  function sumCartListAmount() {
    const cartListPriceArray = cartList.map(cartItem => cartItem.amount * cartItem.price)
      
    const TotalPrice = cartListPriceArray.reduce((a,b) => a + b, 0)
      
    return TotalPrice
  }
  

  return (
    <>
      <Container>
        <BackIcon onClick={history.goBack} />

        {cartList.map((cart) => (
          <CartCard
            key={cart.id}
            id={cart.id}
            name={cart.name}
            amount={cart.amount}
            price={cart.price}
          />
        ))}

        <FinishCartButton onClick={OpenModal}>
          Checkout
        </FinishCartButton>
      </Container>

      {modalCheckout && (
        <ModalCheckout>
          <div>
            <p>Your items totaled $ {sumCartListAmount()}
            </p>
            <div>
              <button onClick={() => setModalCheckout(false)}>
                Close
              </button>
              <button onClick={Checkout}>
                Buy
              </button>
            </div>
          </div>
        </ModalCheckout>
      )}
    </>
  );
}
