"use client"

import { SignInButton, SignedIn, SignedOut, UserButton, SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function TopSidebar() {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();

    return (
        <section className="flex bg-slate-900 rounded-e">
            <div className='border-r-2'>
                <Link 
                    href='/'
                    className='center'>
                        <Image
                            src='/assets/logo.svg'
                            alt='logo'
                            width={60}
                            height={60}
                            className={`transform transition-transform ${isHovered ? 'rotate-180' : 'rotate-0'}`}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        />
                </Link>
            </div>
            <div className="p-3">
                <SignedIn>
                    <UserButton afterSignOutUrl="/sign-in"/>
                </SignedIn>
            </div>
            <div className="p-3 fixed right-2">
                <SignedIn>
                    <SignOutButton signOutCallback={() => router.push('/sign-in')}>
                        <div className='center gap-3'>
                            <Image 
                                src='/assets/logout.svg'
                                alt='logout'
                                width={24}
                                height={24}
                            />
                            <p className='text-white text-sm'>Log Out</p>
                        </div>
                    </SignOutButton>
                </SignedIn>
            </div>
        </section>
    );
}

export default TopSidebar;