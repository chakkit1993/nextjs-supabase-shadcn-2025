import { createClient } from '@supabase/supabase-js'

const bucket = "event-image-bucket"
const url = process.env.SUPABASE_URL as string
const key = process.env.SUPABASE_KEY as string
// Create Supabase client
const supabase = createClient(url, key)

// Upload file using standard upload
export async function uploadFile(image:any) {
const timeStamp = Date.now()
const newName = `event-${timeStamp}`
  const { data, error } = await supabase.storage
  .from(bucket)
  .upload(newName, image)

    if(!data) throw new Error('Image upload failed')
   
  //   if (error) {
//     // Handle error
//   } else {
//     // Handle success
//   }
    return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
}