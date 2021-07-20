import React from 'react';
import { ProductCard } from '../../components/ProductCard';
import { Container, CreditsImages } from './styles'
import { ItensList } from '../../ItensList'

export function Home() {
  return(
    <Container>
      {ItensList.map(ItemList => (
        <ProductCard 
          key={ItemList.id} 
          id={ItemList.id} 
          name={ItemList.itemName}
          price={ItemList.price}
          img={ItemList.img}
        />
      ))}
      <CreditsImages>
      "Images Designed by pch.vector / Freepik"
      </CreditsImages>
    </Container>
  )
}