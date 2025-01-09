import { EventCardProps } from '@/utils/type'
import React from 'react'

const EventCard =  ({event}: {event:EventCardProps}) => {
  return (
    <div className="max-w-sx rounded-xl overflow-hidden shadow-lg bg-white">
           <img
             src={event.imageUrl}
             className="w-full"
             width="500"
             height="500"
             sizes="100vw"
             style={{
               width: "100%",
               height: "12rem",
               objectFit: "cover",
             }}
             alt="Sunset in the mountains"
           />
           <div className="grid grid-rows-4 grid-flow-col ">
             <div className="row  flex px-4 justify-start items-center text-black">
               <div className="pb-2 text-left border-white ">
                 <div className="text-lg text-black  leading-normal">
                   {event.eventName}
                 </div>
               </div>
             </div>
   
             <div className="row flex justify-start px-4 items-center text-black">
               <span>
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   height="48"
                   width="24"
                   viewBox="0 0 448 512"
                 >
                   <path d="M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                 </svg>
               </span>
   
               <span className="px-4"> {event.eventDate}</span>
             </div>
             <div className="row flex justify-start px-4 items-center text-black">
               <span>
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   height="48"
                   width="24"
                   viewBox="0 0 384 512"
                 >
                   <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                 </svg>
               </span>
   
               <span className="px-4"> {event.eventDetails}</span>
             </div>
             <div className="row flex justify-start px-4 items-center text-black">
               <span>
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   height="48"
                   width="24"
                   viewBox="0 0 640 512"
                 >
                   <path d="M335.5 4l288 160c15.4 8.6 21 28.1 12.4 43.5s-28.1 21-43.5 12.4L320 68.6 47.5 220c-15.4 8.6-34.9 3-43.5-12.4s-3-34.9 12.4-43.5L304.5 4c9.7-5.4 21.4-5.4 31.1 0zM320 160a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM144 256a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm312 40a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM226.9 491.4L200 441.5V480c0 17.7-14.3 32-32 32H120c-17.7 0-32-14.3-32-32V441.5L61.1 491.4c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l37.9-70.3c15.3-28.5 45.1-46.3 77.5-46.3h19.5c16.3 0 31.9 4.5 45.4 12.6l33.6-62.3c15.3-28.5 45.1-46.3 77.5-46.3h19.5c32.4 0 62.1 17.8 77.5 46.3l33.6 62.3c13.5-8.1 29.1-12.6 45.4-12.6h19.5c32.4 0 62.1 17.8 77.5 46.3l37.9 70.3c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8L552 441.5V480c0 17.7-14.3 32-32 32H472c-17.7 0-32-14.3-32-32V441.5l-26.9 49.9c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l36.3-67.5c-1.7-1.7-3.2-3.6-4.3-5.8L376 345.5V400c0 17.7-14.3 32-32 32H296c-17.7 0-32-14.3-32-32V345.5l-26.9 49.9c-1.2 2.2-2.6 4.1-4.3 5.8l36.3 67.5c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8z" />
                 </svg>
               </span>
   
               <span className="px-4"> {event.eventOwner}</span>
             </div>
           </div>
         </div>
  )
}

export default EventCard