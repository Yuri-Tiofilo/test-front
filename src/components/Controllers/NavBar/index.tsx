import React from 'react'
import ActiveLink from '../ActiveLink'

import { Container } from './styles'

const NavBar: React.FC = () => {
  return (
    <Container>
      <ActiveLink title="SACOLA" active />
      <ActiveLink title="PAGAMENTO" />
      <ActiveLink title="CONFIRMAÇÃO" />
    </Container>
  )
}

export { NavBar }
