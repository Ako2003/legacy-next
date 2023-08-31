import { SignUp } from "@clerk/nextjs";
import React from "react";

export default function Page(){
    return (
        <div className="bg-gray-500 center h-screen">
            <section>
                <SignUp />
            </section>
        </div>
    )
}