"use client"; // Marks this component as a Client Component

import React from 'react';
import Image from 'next/image';
import { HiOutlinePencil } from "react-icons/hi2";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/navigation'


export default function Header() {
  const USER_IMAGE = 'https://res.cloudinary.com/dknvsbuyy/image/upload/v1686314044/1617826370281_30f9a2a96a.jpg';
  const { data: session } = useSession();
  console.log(session);
  const router=useRouter()
  
  return (
    <div className='flex justify-between items-center w-full border-blue-500 border-b-[2px] p-5'>
      <img src='/images/logo.png' className='w-[140px]' alt='Logo' />
      <div className='flex items-center gap-5'>
        <button className='px-3 py-2 bg-black text-white rounded-full flex items-center gap-2'>
          <span className='hidden sm:block' onClick={()=>router.push('/create-post')} >Add Project</span> 
          <HiOutlinePencil className='sm:hidden' />
        </button>
        
        {session ? (
          <div className='flex items-center gap-5'>
            <img src={session.user?.image || USER_IMAGE} alt="User" className='w-10 h-10 rounded-full' />
            <button className='px-3 py-2 bg-gray-700 text-white rounded-full' onClick={() => signOut()}>
              <span className='hidden sm:block'>SIGN OUT</span>
              <BiLogOut className='sm:hidden' />
            </button>
          </div>
        ) : (
          <button className='px-3 py-2 bg-gray-700 text-white rounded-full' onClick={() => signIn()}>
            <span className='hidden sm:block'>SIGN IN</span>
            <BiLogIn className='sm:hidden' />
          </button>
        )}
      </div>
    </div>
  );
}