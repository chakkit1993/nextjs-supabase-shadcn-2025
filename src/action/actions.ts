'use server';

import { profileSchema, eventSchema, validateWithZod ,validateImage, imageSchema} from "@/utils/schema";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import {prisma} from '@/utils/db';
import { redirect } from "next/navigation";
import { uploadFile } from "@/utils/supabbase";


export const getAuthUser = async () =>{
    const user = await currentUser();
    //console.log(user);
    if (!user) {
            //throw new Error("You must logged!!!");
            return null;
      }
      if (!user.privateMetadata.hasProfile) redirect("/user/profile/create");

    return user;
}

export const getProfile = async () =>{
    const user = await currentUser();
    if (!user) {
        //throw new Error("You must logged!!!");
        return null;
      }
      if (!user.privateMetadata.hasProfile) redirect("/user/profile/create");

    const profile =  prisma.profile.findUnique({
        where:
            {
                clerkId:user.id
            }
    })

    return profile;
}

const readerError = (error: unknown):{message:string} => {
    return{
        message: error instanceof Error ? error.message : "An error !!"
    }
}
export const updateProfileAction = async (prevState:any, formData: FormData)=>{
    console.log('updateProfileAction');
    //call api update 
    try{

        const user = await getAuthUser();
        if (!user) throw new Error("Please Login!!!");
        
        const rawData = Object.fromEntries(formData);
        //console.log(rawData);
        const validateField = validateWithZod(profileSchema ,rawData);
        console.log("validated", validateField);
        await prisma.profile.update({
            where:{
                clerkId:user.id
            },
           data: {
            ...validateField,
           },
        })

        const client = await clerkClient();
        await client.users.updateUserMetadata(user.id, {
          privateMetadata: {
            hasProfile: true,
          },
        });
        //return {message : "Create Successfully !@!"}
    }catch(error:any){
        //console.log(error)
        return readerError(error);
    }
    redirect('/user/profile');
    
}

export const createProfileAction = async (prevState:any, formData: FormData)=>{
    try{

        const user = await getAuthUser();
        if (!user) throw new Error("Please Login!!!");
        
        const rawData = Object.fromEntries(formData);
        //console.log(rawData);
        const validateField = validateWithZod(profileSchema ,rawData);
        console.log("validated", validateField);
        await prisma.profile.create({
           data: {
            clerkId: user.id,
            email: user.emailAddresses[0].emailAddress,
            profileImage: user.imageUrl ?? "",
            ...validateField,
           },
        })

        const client = await clerkClient();
        await client.users.updateUserMetadata(user.id, {
          privateMetadata: {
            hasProfile: true,
          },
        });
        //return {message : "Create Successfully !@!"}
    }catch(error:any){
        //console.log(error)
        return readerError(error);
    }
    redirect('/');
}

export const createEventAction = async (prevState:any, formData: FormData)=>{
    try{

        const user = await getAuthUser();
        if (!user) throw new Error("Please Login!!!");

        const rawData = Object.fromEntries(formData);
        const file = formData.get('image') as File 
        //console.log(rawData);
       
        const validateFile = validateWithZod(imageSchema ,{image:file}); 
        const validateField = validateWithZod(eventSchema ,rawData);
       // console.log("validateField", validateField);
       // console.log('validateFile',validateFile);

        //const events =  await prisma.event.findMany()
        //console.log('events', events);
        const fullPath = await uploadFile(validateFile.image);
        console.log('fullPath',fullPath);

        await prisma.event.create({
           data:{
                ...validateField,
                imageUrl:fullPath,
                profileId:user.id,
           }
         })

        return {message : "Create Successfully !@!"}
    }catch(error:any){
        console.log(error)
        return readerError(error);
    }

}

export const fetchEvents = async ({search=""}:{search?:string} )=>{

    const events = await prisma.event.findMany({
        where:{
            OR :[ 
                {eventName:{contains:search , mode:"insensitive"}},
                {eventDetails:{contains:search , mode:"insensitive"}},
                {eventOwner:{contains:search , mode:"insensitive"}}
            ]
        },orderBy:{
            createdAt: "desc"
        }
    })

    return events;

}
 


