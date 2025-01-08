"use client";
import React from 'react'
import { Input } from '../ui/input'
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
const SearchBox = () => {

    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const [search, setSearch] = useState(
      searchParams.get("search")?.toString() || ""
    );
  
    // const handleSearch = useDebouncedCallback((value: string) => {
    //   const params = new URLSearchParams(searchParams);
    //   if (value) {
    //     params.set("search", value);
    //   } else {
    //     params.delete("search");
    //   }
    //   replace(`/?${params.toString()}`);
    // }, 500);
  
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>{
        //e.preventDefault();
        const newValue = e.target.value;
        console.log('newValue', newValue);
        const params = new URLSearchParams(searchParams);
        params.set("search", newValue);

    }

    useEffect(() => {
      // code body
      if (!searchParams.get("search")) {
        setSearch("");
      }
    }, [searchParams.get("search")]);

  return (
    <Input   type="text"
    placeholder="Seach Event..."
    className="mx-auto max-w-lg"
    onChange={(e) => {
       setSearch(e.target.value);
       handleSearch(e);
    }}
    value={search}
    ></Input>
  )
}

export default SearchBox