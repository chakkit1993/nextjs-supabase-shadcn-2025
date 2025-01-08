import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label';


type FormInputPorps = {
    name: string;
    label: string;
    peachcolor?: string;
    type: string;
    defaultValue?: string;

};



const FormInput = (porps:FormInputPorps) => {

    const {name,label,peachcolor,type , defaultValue} = porps;

  return (

    <div>
        <Label htmlFor={name}>{label} </Label>
        <Input name={name} placeholder={peachcolor} type={type} defaultValue={defaultValue}></Input></div>
  )
}

export default FormInput