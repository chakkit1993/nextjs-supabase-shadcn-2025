"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="py-20 ">
    <Image
      //src="https://images.unsplash.com/photo-1546511158-727361d62d25?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      src="/images/cover.jpg"
      width={1000}
      height={1000}
      // quality={100}
      alt=""
      sizes="100vw"
      style={{
        width: "100%",
        height: "32rem",
        objectFit: "cover",
      }}
    />
  </div>
  )
}

export default Hero