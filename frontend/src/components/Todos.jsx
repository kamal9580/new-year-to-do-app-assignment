

   export function Todos({todos}) {   
    return <div>
        
        {
            todos.map(function(todo){
                return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "completed" : "mark as completed"}</button>

                </div>
            })
        }
    </div>
   }

   //this here it tells that the iteerate through all the todo and map through the div