import React from 'react'
import { render } from 'react-dom'
import { createGlobalStyle } from 'styled-components'

import App from './app'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Comic Neue", sans-serif;
    font-size: 16px;
  }
`

render (
  <>
    <GlobalStyle/>
    <App/>
  </>
  , document.getElementById('app')
)
