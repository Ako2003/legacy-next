import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import getRooms from "@/app/api/rooms/get-rooms";
import Image from "next/image";
import Link from "next/link";
import RoomDeleteButton from "@/components/room/RoomDeleteButton";

export async function RoomInfoTable(){
    const rooms = await getRooms();
    return(
        <div className="flex mt-15">
            <Table>
                <TableCaption>A list of rooms.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Number</TableCell>
                        <TableCell>Floor</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Available</TableCell>
                        <TableCell className="text-right">Actions</TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rooms.map((room, index) => {
                        const renderDeleteButton = <RoomDeleteButton id={room._id}/>
                        return(
                            <TableRow>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell className="font-medium">{room.number}</TableCell>
                                <TableCell>{room.floor}</TableCell>
                                <TableCell>{room.price}</TableCell>
                                <TableCell>{room.description}</TableCell>
                                <TableCell>{room.available ? 'Yes' : 'No'}</TableCell>
                                <TableCell className="flex float-right gap-4">
                                    <Link 
                                        href={`/rooms/${room._id}`}
                                        className="flex-none"
                                    >
                                        <Image 
                                            src="/assets/view.svg"
                                            width={20}
                                            height={20}
                                            alt="view"
                                            className="cursor-pointer" 
                                        />
                                    </Link>
                                    <Link className="flex-none" href={`/rooms/edit/${room._id}`}>
                                        <Image 
                                            src="/assets/edit.svg"
                                            width={20}
                                            height={20}
                                            alt="edit"
                                            className="cursor-pointer" 
                                        />
                                    </Link>
                                    {renderDeleteButton}
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}