"use server"
import React from 'react'
import FormInput from './FormInput'
import TextareaWithLabel from './TextareaWithLabel';
import InputFile  from './InputFile';

import FormContainer from './FormContainer';
import {BackButton, UpdateButton} from '../button/Buttons';
import { redirect } from 'next/navigation';
import {  getProfile, updateProfileAction } from '@/action/actions';
import { Button } from '../ui/button';
const DetailsProfile = async () => {
    const profile = await getProfile();
    console.log(profile);
    if(!profile) {
        return redirect('/');
    }
    else{
        return (
            <FormContainer action={updateProfileAction}>
            <div className='grid md:grid-cols-2 gap-4 mt-4'>
               <FormInput name="firstname" type="text" label='First Name' defaultValue={profile?.firstname}></FormInput>
               <FormInput name="lastname" type="text" label='Last Name'   defaultValue={profile?.lastname} ></FormInput>
               <FormInput name="username" type="text" label='User Name'  defaultValue={profile?.username} ></FormInput>
           </div>
           <div className="flex mt-6 justify-between w-full " >
           <BackButton className="" text="Back" size="lg"></BackButton>
                <UpdateButton className="" text="Update" size="lg" ></UpdateButton>

           </div>

           </FormContainer>
        )
    }
 
}

export default DetailsProfile