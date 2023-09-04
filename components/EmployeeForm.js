"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import Image from "next/image";
import '@radix-ui/themes/styles.css';

import { Flex, Avatar, Link } from "@radix-ui/themes"; 
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
import { useState } from "react";
import { EmployeeValidation } from "@/lib/validations/employee.validation";
import { useRouter } from "next/navigation";

export function EmployeeForm() {
    const [isToggled, setIsToggled] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const router = useRouter();

    const handleClick = () => {
        setIsToggled(!isToggled)
    }

    const form = useForm({
        resolver: zodResolver(EmployeeValidation),
        defaultValues:{
            name: "",
            surname: "",
            email: "",
            age: ""
        },
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3000/api/employees',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    surname,
                    email,
                    age
                },
                {
                    mode: 'no-cors'
                })
            });

            if(res.ok){
                router.push('/employees')
                setName('');
                setSurname('');
                setEmail('');
                setAge(''); 
            }else{
                throw new Error ('Failed to create an employee');
            }
        } catch (error) {
            console.log(error);
        }            
    }

    const renderEmployeeCreateCard = () => {
        return (
            <div className="mb-10 border-2 border-gray-400 rounded-xl">
                <div className="center">
                    <Image 
                        src='/assets/up.svg'
                        alt="up-arrow"
                        width={30}
                        height={30}
                        className="pt-3 cursor-pointer"
                        onClick={handleClick}
                    />
                </div>
                <div className="center pt-5">
                    <p className="text-xl">Create employee</p>
                </div>
                <div className="p-10 max-sm:center">
                    <Form {...form}>
                        <form onSubmit={handleSubmit}  className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input onChange={(e) => setName(e.target.value)} value={name} className="rounded-xl max-sm:w-52" placeholder="Name" />
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
                                    <Input onChange={(e) => setSurname(e.target.value)} value={surname} className="rounded-xl max-sm:w-52" placeholder="Surname" />
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
                                    <Input onChange={(e) => setEmail(e.target.value)} value={email} className="rounded-xl max-sm:w-52" type="email" placeholder="Email" />
                                </FormControl>
                                <FormMessage 
                                    className="text-red-500"
                                    errorClassName="border border-red-400 rounded p-2 bg-white text-xs w-full mt-1 focus
                                    :outline-none focus:ring-2 focus:ring-red-600"
                                />
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
                                    <Input onChange={(e) => setAge(e.target.value)} value={age} className="rounded-xl max-sm:w-52" type="number" placeholder="Age" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <Button className="bg-blue-950 rounded-xl w-full hover:bg-blue-900 hover:text-white" type="submit">Submit</Button>
                        </form>
                    </Form>
                </div>
            </div>
        )
    }

    return(
        <section>
            {isToggled? 
            renderEmployeeCreateCard(): 
            <div className="mb-10">
                <Link onClick={handleClick}>
                    Create employee
                </Link>
            </div>}
        </section>
    );
}

