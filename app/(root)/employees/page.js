import { EmployeeForm } from '@/components/employee/EmployeeForm';
import { EmployeeInfoTable } from '@/components/employee/EmployeeInfoTable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

async function page() {     
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
            <div>
                <EmployeeInfoTable />
            </div>
            <ToastContainer 
            closeOnClick
            autoClose={3000}
            theme="dark"
            />
        </section>
    );
}

export default page;