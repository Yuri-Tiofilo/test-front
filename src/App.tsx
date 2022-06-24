import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import Routes from './routes'

import Global from './styles/global'
import theme from './styles'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes />
        <Global />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
