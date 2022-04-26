import { SyntheticEvent, useCallback, useEffect, useRef } from 'react'
import { debounce } from 'lodash'

export default function useThrottle(
  callback: (e: SyntheticEvent) => any,
  timeout: number,
) {
  // const options = { leading: true, trailing: false }
  const ref = useRef(callback)

  useEffect(() => {
    ref.current = callback
  })

  return useCallback(
    debounce((e: SyntheticEvent) => ref.current(e), timeout),
    [timeout]
  )
}



