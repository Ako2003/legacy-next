import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import getEmployees from "@/app/api/employees/get-employees";
import Image from "next/image";
import Link from "next/link";
import EmployeeDeleteButton from "@/components/employee/EmployeeDeleteButton";


export async function EmployeeInfoTable() {
    const employees = await getEmployees();
    return(
      <div className="flex mt-15">
        <Table>
          <TableCaption>A list of employees.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Surname</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Age</TableCell>
              <TableCell className="text-right">Actions</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map((employee, index) => {
              const renderDeleteButton = <EmployeeDeleteButton id={employee._id}/>
              return(
                <TableRow>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell className="font-medium">{employee.name}</TableCell>
                    <TableCell>{employee.surname}</TableCell>
                    <TableCell>{employee.email}</TableCell>
                    <TableCell>{employee.age}</TableCell>
                    <TableCell className="flex float-right gap-4">
                      <Link 
                      href={`/employees/${employee._id}`}
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
                      <Link className="flex-none" href={`/employees/edit/${employee._id}`}>
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
            )})}
          </TableBody>
        </Table>
      </div>
      )
}