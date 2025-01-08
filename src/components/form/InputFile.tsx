import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import React from 'react'

type InputFilePorps = {
    name: string;
    label: string;

};


const InputFile = (porps:InputFilePorps) => {
    const {name , label} =porps;
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor={name}>{label}</Label>
    <Input id={name}         
         name={name}
         type="file"
         //required
         accept="image/*"/>
  </div>
  )
}

export default InputFile



