import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import getEmployee from "@/app/api/get-employee";

export async function InfoTable() {
    const employees = await getEmployee();
    return(
      <div className="flex mt-15">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Surname</TableCell>
              <TableCell>Email</TableCell>
              <TableCell className="text-right">Age</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map((employee) => (
                <TableRow>
                    <TableCell className="font-medium">{employee.name}</TableCell>
                    <TableCell>{employee.surname}</TableCell>
                    <TableCell>{employee.email}</TableCell>
                    <TableCell className="text-right">{employee.age}</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      )
}