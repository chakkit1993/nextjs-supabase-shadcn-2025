"use client";
import { useToast } from "@/hooks/use-toast";
import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton   } from "@clerk/nextjs";

import React, { useEffect, useState } from "react";
import { BackButton } from "../button/Buttons";
import { Button } from "../ui/button";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [value, setValue] = useState("");
  const router = useRouter()
  const handleTextChange = (event : any) => {
    setValue(event.target.value);
    console.log("textChange : " + event.target.value);
  };

  const {toast} = useToast();
  const handleLogout = ()=>{
      toast({description:"Logout"});
  }
  useEffect(() => {}, []);

  return (
    <header className="">
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b backdrop-blur-lg bg-opacity-80">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 ">
          <div className="relative flex h-16 justify-between">
            <div className="flex flex-1 items-stretch justify-start">
              <a className="flex flex-shrink-0 items-center" href="#">
                <img
                  className="block h-12 w-auto"
                  src="/images/logo.png"
                />
              </a>
            </div>
            <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8">
                <SignedIn>
                    <div><UserButton/> </div>
                <SignOutButton>
                    <button  className="text-gray-700 hover:text-indigo-700 text-sm font-medium" onClick={handleLogout}>Sign out</button>
                </SignOutButton>
                </SignedIn>
                <SignedOut>
                    <SignInButton  mode="modal" ><button  className="text-gray-700 hover:text-indigo-700 text-sm font-medium">Log in</button></SignInButton>
                    <SignUpButton mode="modal" ><button className="text-gray-700 hover:text-indigo-700 text-sm font-medium" >Register</button></SignUpButton>
                </SignedOut>
                <Button onClick={()=> router.push('/user/profile/create')}>Create</Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}