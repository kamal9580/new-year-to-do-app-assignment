const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://nileshkumarkamal:vGgrMLgu41wlRXAW@cluster0.1injvpi.mongodb.net/")

const todoschema = mongoose.Schema({
    tittle:string,
    description:string,
    completed:boolean
})

const todo=mongoose.model('todos',todoschema);

module.exports={
    todo
}