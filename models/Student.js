let mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    first_name: String,
    last_name: {
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    total:{
        type:Number,
        default:0.0,
        validate(v){
            if (v<0) throw new Error("Total marks cant be nagative")

        }
    }
})
const Student = mongoose.model("student", StudentSchema)
module.exports = Student