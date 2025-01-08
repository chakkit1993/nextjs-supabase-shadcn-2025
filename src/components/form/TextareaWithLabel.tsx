import React from 'react'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'

type TextareaPorps = {
    name: string;
    label: string;
    peachcolor?: string;
    defaultValue?: string;

};


const TextareaWithLabel = (porps:TextareaPorps) => {
    const {name,label,peachcolor,defaultValue} = porps;
  return (
    <div className="grid w-full gap-1.5">
    <Label htmlFor={name}>{label}</Label>
    <Textarea placeholder={peachcolor} id={name} name={name} />
  </div>
  )
}

export default TextareaWithLabel