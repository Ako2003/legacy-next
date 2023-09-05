import RoomForm  from '@/components/room/RoomForm';
import { RoomInfoTable } from '@/components/room/RoomInfoTable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function page() {
    return (
        <section className="m-10">
            <div>
                <h1 className="text-3xl">Rooms</h1>
            </div>
            <div className="mt-10">
                <div>
                    <RoomForm />
                </div>
            </div>
            <div>
                <RoomInfoTable />
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