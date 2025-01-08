
"use client"
import CardEvent from '@/components/card/CardEvent';
import LoadingCardEvent from '@/components/card/LoadingCardEvent';
import TitleEvent from '@/components/card/TitleEvent';
import Hero from '@/components/hero/Hero';
import { DarkMode } from '@/components/navbar/DrakMode';
import SearchBox from '@/components/navbar/SearchBox';
import React from 'react'

 const page = () => {

  const title1 = "Popular this week";
  return (
    <section>
      <Hero></Hero>
      <DarkMode></DarkMode>
      <SearchBox></SearchBox>
      <div className="py-6 ">
        <TitleEvent titleName={title1}></TitleEvent>
        {/* <LoadingCardEvent></LoadingCardEvent> */}
      <ul className="grid gap-x-10 gap-y-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
          <li><CardEvent></CardEvent></li>
          <li><CardEvent></CardEvent></li>
          <li><CardEvent></CardEvent></li>
          <li><CardEvent></CardEvent></li>
          <li><CardEvent></CardEvent></li>
          <li><CardEvent></CardEvent></li>
          <li><CardEvent></CardEvent></li>
          <li><CardEvent></CardEvent></li>
          <li><CardEvent></CardEvent></li>
          <li><CardEvent></CardEvent></li>
          <li><CardEvent></CardEvent></li>
      </ul>

      </div>


    </section>
  );
}

export default page;
