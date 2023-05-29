"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
    const isUserLogginedIn = True;
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href='' className='flex gap-2 flex-center'>
            <Image 
            src="/assets/images/logo.svg"
            alt='Promptopia Logo'
            width={30}
            height={30}
            className='object-contain'
            />
            <p className='logo_text'>Promptopia</p>
        </Link>
        {/* <Mobile Navigation/> */}
        <div className='sm:flex hidden'>
            { isUserLogginedIn ?(
                <div className='flex gap-3 md:gap-3'>

                </div>
            ):(
                <></>
            )}
        </div>
    </nav>
  )
} 

export default Nav