import React from 'react'
import { Card } from '../../Controllers/Card'
import { Item } from '../../Controllers/Item'

const ListProductsCart: React.FC = () => {
  return (
    <Card style={{ padding: '12px 13px 12px 13px', marginBottom: '20px', marginTop: '5px' }}>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </Card>
  )
}

export { ListProductsCart }
