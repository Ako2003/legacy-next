"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import Image from "next/image";

import { Flex, Avatar } from "@radix-ui/themes"; 
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import * as z from "zod";
import { Code } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(3).max(50),
})

export function EmployeeForm() {
    function onSubmit(values){
        console.log(values);
    }
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
            name: "",
        },
    })

    return(
        <section className="center">
            <div className="border-2 rounded-xl">
                <div className="center">
                    <Image 
                        src='/assets/up.svg'
                        alt="up-arrow"
                        width={30}
                        height={30}
                        className="pt-3 cursor-pointer"
                    />
                </div>
                <div className="center pt-5">
                    <p className="text-xl">Create employee</p>
                </div>
                <div className="p-10">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input className="rounded-xl w-96 max-sm:w-52" placeholder="Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="surname"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Surname</FormLabel>
                                <FormControl>
                                    <Input className="rounded-xl w-96 max-sm:w-52" placeholder="Surname" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input className="rounded-xl w-96 max-sm:w-52" type="email" placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="age"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Age</FormLabel>
                                <FormControl>
                                    <Input className="rounded-xl w-96 max-sm:w-52" type="number" placeholder="Age" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <Button className="bg-blue-950 w-full rounded-xl hover:bg-blue-900 hover:text-white" type="submit">Submit</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    );
}

