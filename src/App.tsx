import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'

import Routes from './routes'
import Global from './styles/global'
import theme from './styles'
import { queryClient } from './lib/query'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Routes />
          <Global />
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
