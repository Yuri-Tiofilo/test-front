import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  body{
    background: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.BLACK};
  }
  body,input,button{
    font-size:1rem;
  }
  h1,h2,h3,h4,h5,h6,strong {
    font-weight:500;
  }
  button{
    cursor: pointer;
    border: 0;
  }
`
