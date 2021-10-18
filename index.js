//mongodb+srv://Lesya:October2021@comp3123.pe9rd.mongodb.net/sample_restaurants?retryWrites=true&w=majority

let express = require("express")
let mongoose = require("mongoose")

let StudentModel = require("./models/Student")

let app = express()
mongoose.connect('mongodb+srv://Lesya:October2021@comp3123.pe9rd.mongodb.net/db_f2021_comp3123?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}
)


app.get("/", (req,res)=>{
    res.send("<h1> MongoDB Example</h1>")
})

//insert new student
app.get("/add", async (req,res)=>{

    let s ={
        first_name:"Gustavo",
        last_name:"Beltran",
        total:50
    }

    // create the student model object
    let new_student = new StudentModel(s)
    try{
        await new_student.save(s)
    res.status(200).send("Student record saved")
    }catch(err){
        res.status(500).send(err)
    }

    res.send("<h1> MongoDB Example</h1>")
})

app.get("/students", async (req,res)=>{
    //const s = await StudentModel.find({})
    //const s = await StudentModel.find({}, "first_name total").sort({total: -1})

    //>100
    const s = await StudentModel.find({total: {$gt: 100}}, "first_name total").sort({total: 1})
    try{
        res.send(s)
    }catch(err){
        res.status(500).send(err)
    }
})

app.listen(8089,()=>{
    console.log("Server is running at http://localhost:8089/")
})