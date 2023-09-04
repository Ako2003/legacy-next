import Employee from "@/lib/models/employee.model.js";
import { connectToDB } from "@/lib/mongo";

async function PUT(req, res) {
    const { id } = req.query;
    await connectToDB();
    try{
        const { name, surname, email, age } = req.body;
        const employee = await Employee.findByIdAndUpdate(id, {
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

async function GET(req, res){
    const { id } = req.query;
    await connectToDB();
    try{
        const employee = await Employee.findById(id);
        res.status(200).json(employee);
    }
    catch (error) {
        // Handle validation 
        res.status(400).json({ statusCode: 400, message: error.message });
    }
}

async function DELETE (req, res){
    const { id } = req.query;
    await connectToDB();
    try{
        const employee = await Employee.findByIdAndDelete(id);
        const employees = await Employee.find({});
        res.status(200).json(employees);
    }
    catch (error) {
        res.status(400).json({ statusCode: 400, message: error.message });
    }
}

export default async function handler(req, res) {
    if (req.method === 'PUT') {
        await PUT(req, res);
    }
    else if (req.method === 'GET') {
        await GET(req, res);
    }
    else if (req.method === 'DELETE') {
        await DELETE(req, res);
    }
  }



