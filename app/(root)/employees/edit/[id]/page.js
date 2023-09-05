"use client"

import { EmployeeValidation } from "@/lib/validations/employee.validation";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { get, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import getEmployee from "@/app/api/employees/get-employee";
import updateEmployee from "@/app/api/employees/update-employee"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function page() {
    const { id } = useParams();
    const router = useRouter();
    const fetchData = async (id) => {
        const employee = await getEmployee(id);
        const {name, surname, email, age} = employee;
        setNewName(name);
        setNewSurname(surname);
        setNewEmail(email);
        setNewAge(age);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await updateEmployee(id, newName, newSurname, newEmail, newAge);
            if(res.ok){
                router.refresh()
                router.push(`/employees`);
                toast.success('Employee updated successfully');
            }else{
                throw new Error ('Failed to create an employee');
            }

        } catch (error) {
            console.log(error);
        }            
    }

    useEffect(()=>{
        fetchData(id)
    },[])

    const [newName, setNewName] = useState('');
    const [newSurname, setNewSurname] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newAge, setNewAge] = useState('');
    const form = useForm({
        resolver: zodResolver(EmployeeValidation),
      })

    return (
        <section className="m-10">
            <div className="">
                <h1 className="text-3xl">Employee Edit</h1>
            </div>
            <div className="my-10 border-2 border-gray-400 rounded-xl">
                <div className="p-10 max-sm:center">
                    <Form {...form}>
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Name */}
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input onChange={(e) => {setNewName(e.target.value)}} value={newName} placeholder="Name" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    {/* Surname */}
                    <FormField
                        control={form.control}
                        name="surname"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Surname</FormLabel>
                            <FormControl>
                            <Input onChange={(e) => {setNewSurname(e.target.value)}} value={newSurname} placeholder="Surname" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    {/* Email */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                            <Input onChange={(e) => {setNewEmail(e.target.value)}} value={newEmail} placeholder="Email"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    {/* Age */}
                    <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Age</FormLabel>
                            <FormControl>
                            <Input onChange={(e) => {setNewAge(e.target.value)}} value={newAge} placeholder="Age" />
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
        </section>
    );
}

export default page;