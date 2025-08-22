import mongoose from "mongoose";

const employeeScheema = new mongoose.Schema({
  name: String,
  Salary: Number,
  language: String,
  city: String,
  isManager: Boolean,
});

const Employee = mongoose.model('Employee',employeeScheema);

export default Employee;