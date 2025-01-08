import React from 'react'
import FormInput from './FormInput'
import TextareaWithLabel from './TextareaWithLabel';
import InputFile  from './InputFile';

import FormContainer from './FormContainer';
import {SubmitButton} from '../button/Buttons';
import { createEventAction } from '@/action/actions';
import MapEvent from '../map/MapEvent';

const CreateEvent = () => {
  return (
    <div>
        <h1>Create Event</h1>
        <div className='bodder p-8 rounded-md'>
         
           <FormContainer  action={createEventAction}>
            <div className='grid md:grid-clos-2 gap-4 mt-4'>
                <FormInput name="eventName" type="text" label='Event Name'  ></FormInput>
                <FormInput name="eventDate" type="text" label='Event Date'  ></FormInput>
                <TextareaWithLabel name="eventDetails" label='Event Details'  ></TextareaWithLabel>
                <InputFile name="image" label="Cover Image"></InputFile>
            </div>
                <SubmitButton className='mt-8' text="submit" size="lg"></SubmitButton>
            </FormContainer>
            <MapEvent></MapEvent>
        </div>
    </div>
  )
}

export default CreateEvent