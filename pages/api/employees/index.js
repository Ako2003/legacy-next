import Employee from "@/lib/models/employee.model.js";
import { connectToDB } from "@/lib/mongo";

async function POST(req, res) {
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
}

// Create Get request
async function GET(req, res) {
    await connectToDB();
    try{
      const employees = await Employee.find({});
      res.status(200).json(employees);
    }
    catch (error) {
      // Handle validation 
      res.status(400).json({ statusCode: 400, message: error.message });
    }
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await POST(req, res);
  } else if (req.method === 'GET') {
    await GET(req, res);
  }
}