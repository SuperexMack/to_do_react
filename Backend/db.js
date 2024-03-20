// here we will write the schemas 
// mongodb://localhost:27017
const mongoose = require("mongoose")
const schema = mongoose.Schema


main()
.then(()=>{
    console.log("you are now connected to the database")
})

.catch((err)=>{
console.log(err)
})

async function main(){
mongoose.connect("mongodb://localhost:27017/mytodo")
}


// let me create the schema
const mytodo = schema({
title :String,
description : String,
completed : Boolean
})

const todo = mongoose.model("todo" , mytodo)

module.exports = {
    todo
}
