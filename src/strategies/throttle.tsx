import React, { MouseEvent, useState } from 'react'
import { EventsContainer, EventMarker, TargetArea } from '../common'
import useThrottle from '../hooks/use-throttle'

export default function Throttle ({ timeout }: { timeout: number }) {
  const [events, setEvents] = useState<MouseEvent[]>([])

  function handleMouseMove (e: MouseEvent) {
    setEvents([
      ...events,
      e,
    ])
  }

  return (
    <div>
      <div>Throttled</div>
      <TargetArea onMouseMove={ useThrottle(handleMouseMove, timeout) }>mouse move</TargetArea>
      <EventsContainer>{ events.map(event => {
        return <EventMarker key={event.timeStamp}/>
      })}</EventsContainer>
    </div>
  )
}
