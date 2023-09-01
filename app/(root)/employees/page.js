"use client"
import { EmployeeForm } from '@/components/EmployeeForm';

function page() {
    return (
        <section className="m-10">
            <div>
                <h1 className="text-3xl">Employees</h1>
            </div>
            <div className="mt-10">
                <div>
                    <EmployeeForm />
                </div>
            </div>
        </section>
    );
}

export default page;