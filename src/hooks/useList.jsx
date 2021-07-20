import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export function useList() {
  const value = useContext(CartContext)
  return value;
}