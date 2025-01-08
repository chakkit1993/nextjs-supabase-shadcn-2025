
import {z,ZodSchema} from 'zod'


export const eventSchema =  z.object({
    eventName : z.string().min(2),
    eventDate : z.string().min(2),
    eventDetails : z.string().min(2),
}) 

export const profileSchema =  z.object({
    firstname : z.string().min(2),
    lastname : z.string().min(2),
    username : z.string().min(2),
}) 

// const validateImage = () => {
//     const maxFileSize = 1024 * 1024;
//     return z.instanceof(File).refine((file) => {
//       return file.size <= maxFileSize;
//     }, "File size must be less than 1MB");
//   };
  
//   export const imageSchema = z.object({
//     image: validateImage(),
//   });

export const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
    const result = schema.safeParse(data)
    if (!result.success) {
        // code
        const errors = result.error?.errors.map((error) => error.message);
        throw new Error(errors.join(","));
      }
      return result.data;
}