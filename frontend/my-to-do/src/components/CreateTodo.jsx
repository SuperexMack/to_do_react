import { useState } from "react"

function Createtodo(){


    const [title ,setTitle] = useState("")
    const [description , setDescription] = useState("")

    return(
    <>


    <input type="text" placeholder="add your title here"
    onChange={(e)=>{
        const value = e.target.value
        setTitle(e.target.value)
    }}
    
    
    >
    </input><br></br>
    <input type="text" placeholder="add your description here"
    
    onChange={(e)=>{
        const nextVal = e.target.value
        setDescription(e.target.value)
    }}
    
    >
        
    </input><br></br>
    <button 
    
    onClick={()=>{
        fetch("http://localhost:8000/todo" , {
        
        method : "POST",
        body:JSON.stringify({
           title: title,
           description:description
        }),

        headers:{
            "Content-type" : "application/json"
        }

        })
        .then(async (res)=>{
            const json = await res.json()
            alert("task added")
        })
    }}

    

    >Add a to do</button>
    </>


    )
}

export default Createtodo

