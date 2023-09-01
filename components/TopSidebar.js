"use client"

import { SignInButton, SignedIn, SignedOut, UserButton, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import { dark } from "@clerk/themes";
import { useRouter } from "next/navigation";

function TopSidebar() {
    const router = useRouter();
    return (
        <section className="flex bg-blue-900 bg-opacity-60 rounded-e">
            <div className="p-5">
                <SignedIn>
                    <UserButton afterSignOutUrl="/sign-in"/>
                </SignedIn>
            </div>
            <div className="p-5 fixed right-2">
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