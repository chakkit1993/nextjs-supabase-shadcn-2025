import React from 'react'
import { Skeleton } from '../ui/skeleton';


const LoadingCardEvent = () => {
  return (
    <>
    {/* <SkeletonCardHero /> */}
    <div
      className="grid gap-x-10 gap-y-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "
    >
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  </>
  )
}

export const SkeletonCard = () => {
    return (
      <div>
        <Skeleton className="h-[300px] rounded-md mb-2" />
        <Skeleton className="h-4 w-3/4 rounded-md mb-2" />
        <Skeleton className="h-4 w-1/2 rounded-md mb-2" />
        <Skeleton className="h-4 w-1/4 rounded-md" />
      </div>
    );
  };
  
  export const SkeletonCardHero = () => {
    return (
      <div>
        <Skeleton className="w-full h-[600px] rounded-md mb-2" />
        <Skeleton className="h-12 w-full rounded-md mb-2" />
      </div>
    );
  };

export default LoadingCardEvent