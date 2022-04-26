import React from 'react'
import styled from 'styled-components'

import Live from './strategies/live'
import Debounce from './strategies/debounce'
import Throttle from './strategies/throttle'
import Delay from './strategies/delay'

const Demo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 24px;
  
  & > div {
    display: flex;
    flex-flow: column nowrap;
    gap: 8px;
  }
`

export default function App () {
  const timeout = 1000

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Live vs Debounced vs Throttled vs Delayed</h1>

      <Demo>
        <Live/>
        <Debounce timeout={ timeout }/>
        <Delay timeout={ timeout }/>
        <Throttle timeout={ timeout }/>
      </Demo>

    </>
  )
}
