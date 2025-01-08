import React from 'react'
import FormInput from './FormInput'
import TextareaWithLabel from './TextareaWithLabel';
import InputFile  from './InputFile';

import FormContainer from './FormContainer';
import {SubmitButton} from '../button/Buttons';
import { createProfileAction, getAuthUser } from '@/action/actions';
import { redirect } from 'next/navigation';
const CreateProfile = async () => {
    const user = await getAuthUser()

    if(!user) return redirect('/sign-in')
        else{
            return (
                <>
                        <h4>Create Profile</h4>
                          <FormContainer  action={createProfileAction}>
                        <div className='grid md:grid-clos-2 gap-4 mt-4'>
                            <FormInput name="firstname" type="text" label='First Name'  ></FormInput>
                            <FormInput name="lastname" type="text" label='Last Name'  ></FormInput>
                            <FormInput name="username" type="text" label='User Name'  ></FormInput>
                        </div>
                            <SubmitButton className='mt-8' text="submit" size="lg"></SubmitButton>
                        </FormContainer></>
              )
    }

}

export default CreateProfile