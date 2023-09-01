import Employee from "@/lib/models/employee.model.js";
import { connectToDB } from "@/lib/mongo";

export default async function handler(req, res) {
  await connectToDB();
  try{
    const { name, surname, email, age } = req.body;
    const user = Employee.create({
      name,
      surname,
      email,
      age
    });
    res.status(200).json({
      user
    });
  }
  catch(err){
    res.status(500).send(err);
  }
}