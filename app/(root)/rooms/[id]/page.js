"use client"
import getRoom from "@/app/api/rooms/get-room";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import RoomDeleteButton from '@/components/room/RoomDeleteButton'

async function page() {
    let { id } = useParams()
    const room = await getRoom(id);

    return(
        <section className="m-10">
            <div className="flex gap-4">
                <h1 className="text-3xl">{room.number}</h1>
                <Link className="mt-2" href={`/rooms/edit/${id}`}>
                    <Image 
                        src="/assets/edit.svg"
                        width={20}
                        height={20}
                        alt="edit"
                        className="cursor-pointer"
                    />
                </Link>
                <RoomDeleteButton id={id}/>
            </div>
            <div className="flex m-10">
                <div className="flex flex-col">
                    <div className="flex">
                        <h1 className="font-medium">Floor:</h1>
                        <h1 className="ml-2">{room.floor}</h1>
                    </div>
                    <div className="flex">
                        <h1 className="font-medium">Available:</h1>
                        <h1 className="ml-2">{room.available}</h1>
                    </div>
                    <div className="flex">
                        <h1 className="font-medium">Price:</h1>
                        <h1 className="ml-2">{room.price}</h1>
                    </div>
                    <div className="flex">
                        <h1 className="font-medium">Description:</h1>
                        <h1 className="ml-2">{room.description}</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default page;