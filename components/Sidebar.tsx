"use client"
import React from 'react'
import { sideBarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const Sidebar = () => {
  const pathname = usePathname()
  return (
    <section className='sticky left-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]' >
      <div className="flex flex- flex-col gap-6">
        {
          sideBarLinks.map((value,index) =>{
            return(
              <Link 
              href={value.route}
              key={index} 
              className={`flex gap-4 items-center p-4 rounded-lg justify-start ${pathname == value.route && 'bg-blue-1 text-white'} `}>
                <Image 
                src={value.imgUrl}
                alt={value.label}
                width={24}
                height={24}/>
                <p className='text-lg font-semibold max-lg:hidden'>{value.label}</p>
              </Link>
            )
          })
        }
        </div>
    </section>
  )
}

export default Sidebar