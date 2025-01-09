import { fetchEvents } from '@/action/actions'
import React from 'react'
import EventList from './EventList'
import { EventCardProps } from '@/utils/type'
import { Button } from '../ui/button'

const EventContainer = async ({search}:{search?:string}) => {
    
    const events: EventCardProps[] = await fetchEvents({search});
    
  return (
    <div >
        {events.length === 0 ? <p>Empty</p> :
        <EventList events={events}></EventList>}</div>
  )
}

export default EventContainer