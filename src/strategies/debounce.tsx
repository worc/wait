import React, { MouseEvent, useState } from 'react'
import { EventsContainer, EventMarker, TargetArea } from '../common'
import useDebounce from '../hooks/use-debounce'

export default function Debounce ({ timeout }: { timeout: number }) {
  const [events, setEvents] = useState<MouseEvent[]>([])

  function handleMouseMove (e: MouseEvent) {
    setEvents([
      ...events,
      e,
    ])
  }

  return (
    <div>
      <div>Debounced</div>
      <TargetArea onMouseMove={ useDebounce(handleMouseMove, timeout) } onTouchMove={ useDebounce(handleMouseMove, timeout) }>mouse move</TargetArea>
      <EventsContainer>{ events.map(event => {
        return <EventMarker key={event.timeStamp}/>
      })}</EventsContainer>
    </div>
  )
}
