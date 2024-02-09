const mongoose = require("mongoose")

//connection
mongoose.connect("mongodb+srv://rafiyaps7:1234@cluster0.qza3cle.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("db connected")
})
.catch(err=>console.log(err))

let mongoschema = mongoose.Schema

const employeeschema = new mongoschema({
    ename:String,
    eage:Number,
    eposition:String,
    esalary:Number

})

var employeemodel = mongoose.model("employee",employeeschema)
module.exports = employeemodel