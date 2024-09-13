import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <main className='flex w-full h-screen items-center justify-center'>
    <SignIn />
    </main>
  )
}