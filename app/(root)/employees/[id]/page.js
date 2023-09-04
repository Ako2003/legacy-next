"use client"
import getEmployee from "@/app/api/employees/get-employee";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import DeleteButton from "@/components/DeleteButton";

async function page() {
    let { id } = useParams()
    const employee = await getEmployee(id);

    return(
        <section className="m-10">
            <div className="flex gap-4">
                <h1 className="text-3xl">{employee.name} {employee.surname}</h1>
                <Link className="mt-2" href={`/employees/edit/${id}`}>
                    <Image 
                        src="/assets/edit.svg"
                        width={20}
                        height={20}
                        alt="edit"
                        className="cursor-pointer"
                    />
                </Link>
                <DeleteButton id={id}/>
            </div>
            <div className="flex m-10">
                <div className="flex flex-col">
                    <div className="flex">
                        <h1 className="font-medium">Email:</h1>
                        <h1 className="ml-2">{employee.email}</h1>
                    </div>
                    <div className="flex">
                        <h1 className="font-medium">Age:</h1>
                        <h1 className="ml-2">{employee.age}</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default page