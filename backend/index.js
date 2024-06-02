const express=require("express");
const {createtodo}=require("./types");
const { todo } = require("./db");
const app=express();

app.use(express.json());

app.post("/todo",async function(req,res){ 
    const createpayload=req.body;
    const parsepayload=createtodo.safeparse(createpayload);//this we doing zhecking ki ha user ye ye ji bhejh sakta hai

    if(!parsepayload.success){
        
            res.status(411).json({
                msg:"you sent the wrong input",
            })

            return;
        }

        //put in mongodb
       await todo.create({

        title:createpayload.title,
        description: createpayload.description
        completed: false

        })

        res.json({
            msg:"todo complete"
        })

})

app.get("/todos",async function(req,res){

      const todos=await todo.find({});//this will give the all the todos in databases

      res.json({
        todos
      })



})

app.put("/completed",async  function(req,res){

    const updatepayload=req.body;
    const parsepayload=updatetodo.safeparse(updatepayload);

    if(!parsepayload.success){
        
            res.status(411).json({
                msg:"you sent the wrong input",
            })

            return;
        }

        await todo.update({
            _id:req.body.id
        },{
            completed=true
        })

        res.json({
            msg:"todo marked as done"
        })

})

app.listen(3000);