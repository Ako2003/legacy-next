import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import getEmployees from "@/app/api/get-employees";
import Image from "next/image";
import Link from "next/link";

export async function InfoTable() {
    const employees = await getEmployees();
    return(
      <div className="flex mt-15">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Surname</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Age</TableCell>
              <TableCell className="text-right">Actions</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map((employee) => (
                <TableRow>
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
                      <Link className="flex-none" href={"/"}>
                        <Image 
                          src="/assets/edit.svg"
                          width={20}
                          height={20}
                          alt="edit"
                          className="cursor-pointer"
                          />
                      </Link>
                      <Link className="flex-none" href={"/"}>
                        <Image
                          src="/assets/delete.svg"
                          width={20}
                          height={20}
                          alt="delete"
                          className="cursor-pointer"
                        />
                      </Link>
                    </TableCell>

                </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      )
}