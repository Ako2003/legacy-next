"use client"
import getEmployee from "@/app/api/get-employee";
import { useParams } from "next/navigation";
import Image from "next/image";

async function page() {
    let { id } = useParams()
    const employee = await getEmployee(id);

    return(
        <section>
            <div className="flex gap-4">
                <h1 className="m-10 text-3xl">{employee.name} {employee.surname}</h1>
                <Image 
                    src="/assets/edit.svg"
                    width={20}
                    height={20}
                    alt="edit"
                    className="cursor-pointer"
                />
                <Image 
                    src="/assets/delete.svg"
                    width={20}
                    height={20}
                    alt="edit"
                    className="cursor-pointer"
                />
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