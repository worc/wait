import React, { MouseEvent, useState } from 'react'
import { EventsContainer, EventMarker, TargetArea } from '../common'

export default function Live () {
  const [events, setEvents] = useState<MouseEvent[]>([])

  function handleMouseMove (e: MouseEvent) {
    setEvents([
      ...events,
      e,
    ])
  }

  return (
    <div>
      <div>Live</div>
      <TargetArea onMouseMove={ handleMouseMove }>mouse move</TargetArea>
      <EventsContainer>{ events.map(event => {
        return <EventMarker key={event.timeStamp}/>
      })}</EventsContainer>
    </div>
  )
}
