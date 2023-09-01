"use client"

import { sidebarLinks } from '@/constants';
import { SignOutButton, SignedIn, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

function LeftSidebar() {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();
    const pathname = usePathname();


    return(
        <section className='leftside'>
            <div className='m-5'>
                <Link 
                    href='/'
                    className='center'>
                        <Image
                            src='/assets/logo.svg'
                            alt='logo'
                            width={75}
                            height={75}
                            className={`transform transition-transform ${isHovered ? 'rotate-180' : 'rotate-0'}`}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        />
                        <h1 className='text-white text-2xl font-extrabold pr-5 max-lg:hidden'>Legacy</h1>
                </Link>
                <hr />
            </div>
            <div>
                <div className='flex mx-7 py-5 center'>
                    <SignedIn>
                        <UserButton afterSignOutUrl="/sign-in"/>
                    </SignedIn>
                </div>
            </div>
            <hr />
            <div>
                    {sidebarLinks.map((link) => {
                        const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
                        return(
                            <div className={`hover:bg-slate-950 ${isActive && 'bg-slate-600'}`}>
                            <Link
                                href={link.route}
                                key={link.label}
                                className='flex mx-7 py-5 max-lg:center'
                            >
                                <Image
                                    src={link.imgURL}
                                    alt={link.label}
                                    width={24}
                                    height={24}
                                    className='max-lg:mr-0 mr-3'
                                />

                                <p className='text-white font-bold text-lg max-lg:hidden '>{link.label}</p>
                            </Link>
                        </div>
                        );
                    })}
            </div>
            <hr />
            <div className='p-6 max-lg:center hover:bg-slate-950 cursor-pointer'>
                <SignedIn>
                    <SignOutButton signOutCallback={() => router.push('/sign-in')}>
                        <div className='flex gap-3'>
                            <Image 
                                src='/assets/logout.svg'
                                alt='logout'
                                width={24}
                                height={24}
                            />
                            <p className='text-white font-bold text-lg max-lg:hidden'>Log Out</p>
                        </div>
                    </SignOutButton>
                </SignedIn>
            </div>
        </section>
    );
}

export default LeftSidebar;