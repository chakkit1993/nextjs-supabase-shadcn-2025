import { EventCardProps } from '@/utils/type'
import React from 'react'
import EventCard from './EventCard';


const EventList = ({events}: {events:EventCardProps[]}) => {
  return (
    <section className="grid gap-x-10 gap-y-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
      {events.map((event) => {
        return <EventCard key={event.id} event={event} />;
      })}
    </section>
  )
}

export default EventList