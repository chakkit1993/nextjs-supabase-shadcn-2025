"use client";
import React from 'react'
import { Input } from '../ui/input'
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from 'use-debounce'
const SearchBox = () => {

    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const [search, setSearch] = useState(
      searchParams.get("search")?.toString() || ""
    );
  
    const handleSearch = useDebouncedCallback((value: string) => {
      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set("search", value);
      } else {
        params.delete("search");
      }
      replace(`/?${params.toString()}`);
    }, 300);
  
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
       handleSearch(e.target.value);
    }}
    value={search}
    ></Input>
  )
}

export default SearchBox