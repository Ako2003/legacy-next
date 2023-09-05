import { EmployeeForm } from '@/components/EmployeeForm';
import { InfoTable } from '@/components/InfoTable';
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
                <InfoTable />
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