"use client"

import { sidebarLinks } from '@/constants';
import { useRouter, usePathname } from 'next/navigation';
import { SignedIn, SignOutButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Footerbar() {
    const router = useRouter();
    const pathname = usePathname();
    return (
        <section className='footerside'>
            <div className='flex'>
                {sidebarLinks.map((link) => {
                    const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
                    return(
                        <div className={`flex-1 hover:bg-blue-700 ${isActive && 'bg-blue-800'}`}>
                            <Link
                                href={link.route}
                                key={link.label}
                                className='py-5 max-lg:center'
                            >
                                <Image
                                    src={link.imgURL}
                                    alt={link.label}
                                    width={24}
                                    height={24}
                                    className='max-lg:mr-0 mr-3'
                                />

                                <p className=' text-white font-bold text-lg max-lg:hidden'>{link.label}</p>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Footerbar;