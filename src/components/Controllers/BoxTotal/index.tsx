import React from 'react'

import { Container, TextInfo, Value, Table } from './styles'

type PropsBoxTotal = {
  data: {
    subTotal?: number,
    shippingTotal?: number,
    discount?: number,
    total: number
  }
}

const BoxTotal: React.FC<PropsBoxTotal> = ({ data }) => {
  return (
    <Container>
      <Table>
        <tbody>
          {data.subTotal && (
            <tr>
              <td>
                <TextInfo>PRODUTOS</TextInfo>
              </td>
              <td>
                <Value>
                  <TextInfo>{data.subTotal}</TextInfo>
                </Value>
              </td>
            </tr>
          )}
          {data.shippingTotal && <div style={{ marginBottom: '2.75px' }} />}
          {data.shippingTotal && (
            <tr>
              <td>
                <TextInfo>FRETE</TextInfo>
              </td>
              <td>
                <Value>
                  <TextInfo>{data.subTotal}</TextInfo>
                </Value>
              </td>
            </tr>
          )}
          {data.discount && <div style={{ marginBottom: '2.0px' }} />}
          {data.discount && (
            <tr>
              <td>
                <TextInfo isDisccount>DESCONTO</TextInfo>
              </td>
              <td>
                <Value>
                  <TextInfo isDisccount>{data.subTotal}</TextInfo>
                </Value>
              </td>
            </tr>
          )}
          {data.total && <div style={{ marginBottom: '5.5px' }} />}
          {data.total && (
            <tr>
              <td>
                <TextInfo isTotal>TOTAL</TextInfo>
              </td>
              <td>
                <Value>
                  <TextInfo isTotal>{data.subTotal}</TextInfo>
                </Value>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  )
}

export { BoxTotal }
