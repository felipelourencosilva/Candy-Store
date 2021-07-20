import styled from 'styled-components';
import { HiOutlineShoppingCart } from 'react-icons/hi';

export const Container = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12%;
  width: 100vw;
  height: 60px;
  border-bottom: 1px solid #E3E3E3;
  margin-bottom: 30px;

  h1 {
    color: #E28DCA;
    font-weight: 500;
    font-size: 28px;

    span {
      color: #A4DDE0;
    }
  }

  a {
    text-decoration: none;
  }
`
export const EmptyCartIcon = styled(HiOutlineShoppingCart)`
  font-size: 28px;
  color: #E28DCA;
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }
`

export const CartWithItens = styled.div`
  position: relative;
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }
`

export const CartIcon = styled(HiOutlineShoppingCart)`
  font-size: 28px;
  color: #E28DCA;

`

export const CartNotification = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 13px;
  height: 13px;
  
  background: #A4DDE0;
  border: 2px solid #E28DCA;
  border-radius: 50%;
  
  color: #E28DCA;
  font-size: 8px;
  font-weight: 700;
`