import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; 

  }

  body {
    margin: 2rem;
    padding: 2rem;
    border: 1px solid #ddd;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
`

export default GlobalStyle

