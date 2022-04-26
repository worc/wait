import { SyntheticEvent, useCallback, useEffect, useRef } from 'react'
import { delay } from 'lodash'

export default function useDelay(
  callback: (e: SyntheticEvent) => any,
  timeout: number,
) {
  // const options =
  const ref = useRef(callback)

  useEffect(() => {
    ref.current = callback
  })

  return useCallback(
    (e: SyntheticEvent) => delay(() => {
      e.persist()
      ref.current(e)
    }, timeout),
    [timeout]
  )
}



