import React from 'react';
import { Container, EmptyCartIcon, CartIcon, CartNotification, CartWithItens } from './styles'
import { Link } from 'react-router-dom'
import { useList } from '../../hooks/useList'

export function Navbar() {
  const { cartList } = useList();
  return(
    <Container>
      <h1>
        Candy<span>Store</span>
      </h1>
      <Link to="/cart">
        {cartList.length <= 0
          ? 
            <EmptyCartIcon /> 
          : 
            <CartWithItens>
              <CartIcon />
              <CartNotification>
                {cartList.length}
              </CartNotification>
            </CartWithItens>
        }
      </Link> 
    </Container>
  )
}