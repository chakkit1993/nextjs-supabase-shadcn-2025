'use client'
import { SignIn , SignInButton ,SignedOut ,SignedIn ,UserButton} from '@clerk/nextjs'

export default function Page() {
  return <div className='flex justify-center py-40'>          

    <SignIn />
    

</div>
}

