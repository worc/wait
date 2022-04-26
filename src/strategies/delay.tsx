import React, { MouseEvent, useState } from 'react'
import { EventsContainer, EventMarker, TargetArea } from '../common'
import useDelay from '../hooks/use-delay'

export default function Delay ({ timeout }: { timeout: number }) {
  const [events, setEvents] = useState<MouseEvent[]>([])

  function handleMouseMove (e: MouseEvent) {
    setEvents([
      ...events,
      e,
    ])
  }

  return (
    <div>
      <div>Delayed</div>
      <TargetArea onMouseMove={ useDelay(handleMouseMove, timeout) }>mouse move</TargetArea>
      <EventsContainer>{ events.map(event => {
        return <EventMarker key={event.timeStamp}/>
      })}</EventsContainer>
    </div>
  )
}
