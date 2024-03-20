// now here using this file we are going to render the all to do task
// rendering all to do means that we are going to show the all to do in the screen

function Todos({todos}){

    return(
    <>

    {todos.map((todo)=>{
    
    return <div>

     <h1>{todo.title}</h1>
     <h1>{todo.description}</h1>
     <button>{todo.completed == true ? "completed" : "mark as complete"}</button>

    </div>


    })}
    
    
    </>

    )
}

export default Todos
