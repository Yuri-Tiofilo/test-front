import React from 'react'
import { NavBar } from '../Controllers/NavBar'

// import { Container } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}

export default Layout
