import mongoose from 'mongoose'

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required:true },
    surname: { type: String, required:true },
    email: { type: String, required:true, unique: true },
    age: { type:Number, required:true },
}) 

const Employee = mongoose.models.Employee || mongoose.model("User", EmployeeSchema);

export default Employee;