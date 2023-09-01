import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

function TopSidebar() {
    return (
        <section className="flex bg-blue-900 bg-opacity-60 rounded-e">
            <div className="p-5">
                <SignedIn>
                    <UserButton afterSignOutUrl="/sign-in"/>
                </SignedIn>
            </div>
        </section>
    );
}

export default TopSidebar;