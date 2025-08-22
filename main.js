import express from "express";
import mongoose from "mongoose";
import Employee from "./models/employee.js"
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


mongoose.connect('mongodb://localhost:27017/company');

const app = express();
const port = 4311

app.set('view engine','ejs')
app.set('views', path.join(__dirname,'views'))

const getRandom = (arr)=>{
let randomNum = Math.floor(Math.random()*(arr.length - 1))
return arr[randomNum]
}

app.get('/',(req,res)=>{
res.render("index")
})

app.get('/generate',async (req,res)=>{
//clear the collection
await Employee.deleteMany({})

let randomNames = ['ajay','Suraj','Abhishek','Anmol','Arun'];
let randomCities = ['delhi','Kolkata','Indraprastha','Noida'];
let randonLanguage = ['JavaScript','Python','Java','C#','React'];
    for (let i = 0 ;i<10;i++){
  let Newemployee =  await Employee.create({
        name: getRandom(randomNames),
        Salary: Math.floor(Math.random()*25000),
        language: getRandom(randonLanguage),
        city: getRandom(randomCities),
        isManager: (Math.random()>0.5)?true:false,
    })
    }
  
    res.render('index')
});

app.listen(port,()=>{
    console.log(`app is running on prot ${port}`);
    console.log(`http://localhost:4311/`)
})
