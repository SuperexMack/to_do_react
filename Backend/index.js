const express = require("express")
const port  = 8000
const zod = require("zod")
const { createtodo} = require("./type")
const { updatetodo} = require("./type")
const {todo} = require("./db")
const cors = require("cors")
const app = express()



app.use(express.json())

app.use(cors())

// now here for validation we are going to use zod


app.post("/todo" ,  async(req,res)=>{
const createpayload = req.body
const parsedpayload = createtodo.safeParse(createpayload)
if(!parsedpayload.success){
    res.status(404).json({
        msg:"send the request properly"
    })
    return
}

// if everything is fine so put the data into the database

await todo.create({
    title : createpayload.title,
    description : createpayload.description,
    completed : false

})

res.json({
    msg:"to do created"
})


})


app.get("/todos" , async(req,res)=>{
    const todos = await todo.find({})
    res.json({
        todos
    })
    
})

app.put("/completed" , async(req,res)=>{


const updatepayload = req.body
const parsedpayload = updatetodo.safeParse(updatepayload)
if(!parsedpayload.success){
    res.status(404).json({
        msg:"send the request properly"
        })
    return
}


// the meaning of this is that we are going to update the data so lets go
// so for that we need a id

// if the post id and the request id are same so update the data otherwise just send 404


// now here i will check that is the same id is present in the database or not 

// let name of our data base is todo

await todo.update(

    {
      _id:req.body.id
    },
    {
     completed : true
    }

)

res.json({
    msg:"your data is updated now"
})

})

app.listen(port , (req,res)=>{
    console.log(`your server is running on the port number ${port}`)
})