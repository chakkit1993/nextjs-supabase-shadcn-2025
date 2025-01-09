import { LinkButton } from '@/components/button/Buttons'
import EventContainer from '@/components/event/EventContainer'
import { Button } from '@/components/ui/button'
//import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    //const router = useRouter()


  return (
    <div>
        <LinkButton size="lg" href='/event/create' text="Create Event"></LinkButton>
        <EventContainer></EventContainer>
    </div>
  )
}

export default page