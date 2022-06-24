import React from 'react'

import { Content, Image, Price, TitleProduct, Info } from './styles'

const Item: React.FC = () => {
  return (
    <Content>
      <Image />
      <Info>
        <TitleProduct>L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium</TitleProduct>
        <Price>R$ 555,00</Price>
      </Info>
    </Content>
  )
}

export { Item }
