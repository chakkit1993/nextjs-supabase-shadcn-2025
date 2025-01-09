import CardEvent from '@/components/card/CardEvent';
import LoadingCardEvent from '@/components/card/LoadingCardEvent';
import TitleEvent from '@/components/card/TitleEvent';
import EventContainer from '@/components/event/EventContainer';
import Hero from '@/components/hero/Hero';
import { DarkMode } from '@/components/navbar/DrakMode';
import SearchBox from '@/components/navbar/SearchBox';
import React, { Suspense } from 'react'

 const page = async ({searchParams}:{searchParams:{search?:string}}) => {

  const title1 = "Popular this week";
  const {search} = await searchParams;
  return (
    <section>
      <Hero></Hero>
      <DarkMode></DarkMode>
      <SearchBox></SearchBox>
      <div className="py-6 ">
        <TitleEvent titleName={title1}></TitleEvent>
        <Suspense fallback={<LoadingCardEvent/>}>
        <EventContainer search={search}></EventContainer>
        </Suspense>
      </div>


    </section>
  );
}

export default page;
