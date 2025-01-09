"use client"
import React from 'react'
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';



type btnSize = "default" | "lg" | "sm";
// const roitai:string = 'tam'
type ButtonProps = {
  className?: string;
  size?: btnSize;
  text?: string;
};

type LinkButtonProps = {
    className?: string;
    size?: btnSize;
    text?: string;
    href?: string;
  };

type SubmitButtonProps = {
    className?: string;
    size?: btnSize;
    text?: string;
  };

export const SubmitButton= ({ className, size, text }: SubmitButtonProps) => {
  return (
    <Button  className={`${className} capitalize`}   type="submit"
    size={size}>{text}</Button>
  )
}





export const UpdateButton=({ className, size, text }: ButtonProps) => {
    return (
      <Button className={`${className} capitalize`}   type="submit"
      size={size}>{text}</Button>
    )
  }
  

  export const BackButton= ({ className, size, text }: ButtonProps) => {
    const router = useRouter();
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        router.back()
      }

    return (
      <Button  className={`${className} capitalize`}   type="button"
      size={size} onClick={handleClick}>{text}</Button>
    )
  }


  export const LinkButton= ({ className, size, text,href }: LinkButtonProps) => {
    const router = useRouter();
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        router.push(`${href}`)
      }

    return (
      <Button  className={`${className} capitalize`}   type="button"
      size={size} onClick={handleClick}>{text}</Button>
    )
  }
  