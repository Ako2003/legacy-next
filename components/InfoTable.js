import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

// async function getEmployee(){
//     const data = await fetch('http://localhost:3000/api/employees');
//     const employees = await data.json();
    
//     return employees;
// }

export async function InfoTable() {
    // const employees = await getEmployee();
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
            {/* {employees.map((employee) => (
                <TableRow>
                    <TableCell className="font-medium">{employee.name}</TableCell>
                    <TableCell>{employee.surname}</TableCell>
                    <TableCell>{employee.email}</TableCell>
                    <TableCell className="text-right">{employee.age}</TableCell>
                </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </div>
      )
}