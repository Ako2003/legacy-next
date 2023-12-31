"use client"
import Image from "next/image";
import deleteEmployee from "@/app/api/employees/delete-employee";
import { useRouter } from "next/navigation";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EmployeeDeleteButton( { id } ) {
    const router = useRouter();
    const handleClick = async ()  => {
        try {
            const res = await deleteEmployee(id);
            // Confirm the action
            confirm("You are going to delete an employee. Complete?");
            
            if(res.ok){
                router.refresh()
                router.push('/employees');
                toast.success('Employee deleted successfully');

            }else{
                throw new Error ('Failed to delete an employee');
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

export default EmployeeDeleteButton;