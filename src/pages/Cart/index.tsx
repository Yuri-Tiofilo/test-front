import React from 'react'
import { Button } from '../../components/Controllers/Button'
import { ListProductsCart } from '../../components/Lists/ListProductsCart'
import { Title } from '../../components/Controllers/Title'
import { BoxTotal } from '../../components/Controllers/BoxTotal'

import { Container } from './styles'
import Layout from '../../components/Layout'

const Cart: React.FC = () => {
  const totals = {
    subTotal: 624.8,
    shippingTotal: 5.3,
    discount: 30,
    total: 618.9
  }
  return (
    <Layout>
      <Container>
        <Title>PRODUTOS</Title>
        <ListProductsCart />

        <BoxTotal data={totals} />

        <Button>SEGUIR PARA O PAGAMENTO</Button>
      </Container>
    </Layout>
  )
}

export default Cart
