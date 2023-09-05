"use client"
import Image from "next/image";
import deleteRoom from "@/app/api/rooms/delete-room";
import { useRouter } from "next/navigation";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RoomDeleteButton( { id } ) {
    const router = useRouter();
    const handleClick = async ()  => {
        try {
            const res = await deleteRoom(id);
            // Confirm the action
            confirm("You are going to delete a room. Complete?");
            console.log(res);
            
            if(res.ok){
                router.refresh()
                router.push('/rooms');
                toast.success('Room deleted successfully');

            }else{
                throw new Error ('Failed to delete a room');
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="flex-none">
            <Image 
                src="/assets/delete.svg"
                width={20}
                height={20}
                alt="delete"
                className="cursor-pointer"
                onClick={handleClick}
            />
        </div>
    );
}

export default RoomDeleteButton;