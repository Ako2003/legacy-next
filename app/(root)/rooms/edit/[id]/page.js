"use client"

import '@radix-ui/themes/styles.css';
import { Link, Flex, Text, Switch } from "@radix-ui/themes";
import { RoomValidation } from "@/lib/validations/room.validation";
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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import getRoom from "@/app/api/rooms/get-room";
import updateRoom from "@/app/api/rooms/update-room"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function page() {
    const { id } = useParams();
    const router = useRouter();
    const fetchData = async (id) => {
        const room = await getRoom(id);
        const {number, floor, available, price, description} = room;
        setNewNumber(number);
        setNewFloor(floor);
        setNewAvailable(available);
        setNewPrice(price);
        setNewDescription(description);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await updateRoom(id, newNumber, newFloor, newAvailable, newPrice, newDescription);
            if(res.ok){
                router.refresh()
                router.push(`/rooms`);
                toast.success('Room updated successfully');
            }else{
                throw new Error ('Failed to create a room');
            }

        } catch (error) {
            console.log(error);
        }            
    }

    useEffect(()=>{
        fetchData(id)
    },[])

    const [newNumber, setNewNumber] = useState('');
    const [newFloor, setNewFloor] = useState('');
    const [newAvailable, setNewAvailable] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const form = useForm({
        resolver: zodResolver(RoomValidation),
      })

    return (
        <section className="m-10">
            <div>
                <h1 className="text-3xl">Room Edit</h1>
            </div>
            <div className="my-10 border-2 border-gray-400 rounded-xl">
                <div className="p-10 max-sm:center">
                    <Form {...form}>
                        <form onSubmit={handleSubmit}
                        className="space-y-8">
                            {/* Number */}
                            <FormField
                                control={form.control}
                                name="number"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Number</FormLabel>
                                    <FormControl>
                                        <Input onChange={(e) => {setNewNumber(e.target.value)}} value={newNumber} placeholder="Number" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />

                            {/* Floor */}
                            <FormField
                                control={form.control}
                                name="floor"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Floor</FormLabel>
                                    <FormControl>
                                    <Input onChange={(e) => {setNewFloor(e.target.value)}} value={newFloor} placeholder="Floor" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            {/* Available */}
                            <FormField
                                control={form.control}
                                name="available"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Available</FormLabel>
                                    <FormControl>
                                    <Flex>
                                        <Text size="2">
                                            <label>
                                            <Switch className="mt-3" highContrast={false} color="blue" variant="soft" radius="full" size="3" mr="2" checked={newAvailable} onClick={() => {setNewAvailable(!newAvailable)}}/>
                                            </label>
                                        </Text>
                                    </Flex>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            {/* Price */}
                            <FormField
                                control={form.control}
                                name="price"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Price</FormLabel>
                                    <FormControl>
                                        <Input onChange={(e) => {setNewPrice(e.target.value)}} value={newPrice} placeholder="Price" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            {/* Description */}
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input onChange={(e) => {setNewDescription(e.target.value)}} value={newDescription} placeholder="Description" />
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
