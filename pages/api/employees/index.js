import Employee from "@/lib/models/employee.model.js";
import { connectToDB } from "@/lib/mongo";

async function POST(req, res) {
  if(req.method === 'POST'){

    await connectToDB();
    try{
      const { name, surname, email, age } = req.body;
      const employee = Employee.create({
        name,
        surname,
        email,
        age
      });
      const employees = await Employee.find({});
      res.status(200).json(employees);
    }
    catch (error) {
      // Handle validation 
      res.status(400).json({ statusCode: 400, message: error.message });
    }
  }else if (req.method === 'GET') {
    // Process the request as a GET request
    await connectToDB();
    try {
      const employees = await Employee.find({});
      res.status(200).json(employees);
    } catch (error) {
      // Handle any errors that may occur during data retrieval
      res.status(500).json({ statusCode: 500, message: 'Internal server error' });
    }
  } else{
    res.status(405).json({ statusCode: 405, message: 'Method not allowed' });
  }
}

export default POST;