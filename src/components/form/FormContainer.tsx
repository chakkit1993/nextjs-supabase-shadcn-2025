'use client'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'
import { actionFunction } from '@/utils/type'
import React,{useActionState, useEffect} from 'react'

const initailState = {
    message:''
}


const FormContainer = ({action,children}:{action:actionFunction, children:React.ReactNode}) => {
  const [state,formAction]= useActionState(action,initailState)
  const {toast} = useToast()
  useEffect(()=>{
    
    if(state.message){
        toast({ className: cn(
            'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
          ),
          title: 'Uh oh! Something went wrong.',
          variant: 'default',
          description:state.message})
    }
  },[state])
    return (
    <form action={formAction}>{children}</form>
  )
}

export default FormContainer