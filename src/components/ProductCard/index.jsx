import React, { useState } from 'react';
import { useList } from '../../hooks/useList';
import { Card, Amount, ItemAmount } from './styles'

export function ProductCard(props) {

  const [ itemAmount, setItemAmount ] = useState(0);
  const { cartList, setCartList } = useList();

  function IncreaseItemAmount() {
    if(itemAmount >= 0) {
      setItemAmount(itemAmount + 1)
    }
  }

  function DecreaseItemAmount() {
    if(itemAmount > 0) {
      setItemAmount(itemAmount - 1)
    }
  }

  function AddItemToCart(e) {
    e.preventDefault()

    if(itemAmount <= 0) {
      return(
        alert('Item amount must be more than 0')
      )
    }

    const CartListFilter = cartList.filter(cartItem => cartItem.id === props.id)


    if(CartListFilter.length > 0) {
      const oldItemAmount = CartListFilter[0].amount

      const newList = cartList.filter(cartItem => cartItem.id !== props.id);

      const newProductToList = {
        id: props.id,
        name: props.name,
        price: props.price,
        img: props.img,
        amount: itemAmount + oldItemAmount,
      }
  
      setCartList([
        ...newList,
        newProductToList
      ])
    } else {
      const newProductToList = {
        id: props.id,
        name: props.name,
        price: props.price,
        img: props.img,
        amount: itemAmount,
      }
  
      setCartList([
        ...cartList,
        newProductToList
      ])
    }

    setItemAmount(0)
  }

  
  return(
      <Card>
        <img src={String(props.img)} alt="produto-foto" />
        <p>{props.name}</p>
        <Amount>
          <span>$</span>{props.price}
        </Amount>
        <ItemAmount onSubmit={AddItemToCart}>
          <div>
            <button type="button" onClick={DecreaseItemAmount}>-</button>
            <div>{itemAmount}</div>
            <button type="button" onClick={IncreaseItemAmount}>+</button>
          </div>
          <button type="submit">Add to cart</button>
        </ItemAmount>
      </Card>
  )
}