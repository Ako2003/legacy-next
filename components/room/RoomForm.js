"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import Image from "next/image";
import '@radix-ui/themes/styles.css';
import { Link, Flex, Text, Switch } from "@radix-ui/themes";
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
import { RoomValidation } from "@/lib/validations/room.validation";
import { useRouter } from "next/navigation";
import createRoom from "@/app/api/rooms/create-room";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RoomForm() {
    const [isToggled, setIsToggled] = useState(false);
    const [number, setNumber] = useState('');
    const [floor, setFloor] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [available, setAvailable] = useState(true);

    const router = useRouter();

    const handleClick = () => {
        setIsToggled(!isToggled)
    }

    const form = useForm({
        resolver: zodResolver(RoomValidation),
        defaultValues: {
            number: "",
            floor: "",
            price: "",
            description: "",
            isAvailable: false
        },
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await createRoom(number, floor, available, price, description);
            console.log(res);
            if (res.ok) {
                router.refresh()
                router.push('/rooms');
                toast.success('Room created successfully');
                setIsToggled(false);
                setNumber('')
                setFloor('')
                setPrice('')
                setDescription('')
                setAvailable(true)
            }
        } catch (error) {
            toast.error('Something went wrong');
        }
    }

    const renderRoomCreateCard = () => {
        return(
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
                    <p className="text-xl">Create Room</p>
                </div>
                <div className="p-10 max-sm:center">
                    <Form {...form}>
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="number"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Number</FormLabel>
                                        <FormControl>
                                            <Input onChange={(e) => setNumber(e.target.value)} value={number} className="rounded-xl max-sm:w-52" placeholder="Number" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="floor"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Floor</FormLabel>
                                        <FormControl>
                                            <Input onChange={(e) => setFloor(e.target.value)} value={floor} className="rounded-xl max-sm:w-52" placeholder="Floor" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="price"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Price</FormLabel>
                                        <FormControl>
                                            <Input onChange={(e) => setPrice(e.target.value)} value={price} className="rounded-xl max-sm:w-52" placeholder="Price" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Input onChange={(e) => setDescription(e.target.value)} value={description} className="rounded-xl max-sm:w-52" placeholder="Description" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="available"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Availability</FormLabel>
                                        <FormControl>
                                        <Flex>
                                            <Text size="2">
                                                <label>
                                                <Switch className="mt-3" highContrast={false} color="blue" variant="soft" radius="full" size="3" mr="2" defaultChecked onClick={() => {setAvailable(!available)}}/>
                                                </label>
                                            </Text>
                                        </Flex>
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
            renderRoomCreateCard(): 
            <div className="mb-10">
                <p className="cursor-pointer" onClick={handleClick}>
                    Create room
                </p>
            </div>}
        </section>
    );

}
