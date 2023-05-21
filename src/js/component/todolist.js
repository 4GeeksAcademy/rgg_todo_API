import React, { useEffect, useState } from "react";

const Todo = () =>{
    const [listItems,setlistItems] = useState([]);
    const [createTask,setcreateTask]=useState("");
    //      [valor act, funcion que modifica el valor] = useState("") 
    useEffect(() =>{
        fetch("https://assets.breatheco.de/apis/fake/todos/user/rubengargu")
        .then(response =>{
            //Linea 9: permite devolver los datos de la API
            return response.json()
        }
    ).then(response=>{setlistItems(response)})
    },[])

    const newTask =(event) =>{
        setcreateTask(event.target.value)
        //Esta funcion permite guardar lo que ha escrito el usuario //
        
    }
    const create=() =>{
        let allTasks = [...listItems,createTask ]
        setlistItems(allTasks) //Esto permite setear todas las tareas
        //La linea tiene todas las tareas
        fetch("https://assets.breatheco.de/apis/fake/todos/user/rubengargu")
        

    }
     
    return(
        <div id="container">
            <input type="text" name="newTask" onChange={newTask}/>
            <button onClick={create} className="btn btn-primary" >Nueva tarea</button>

<ul>{listItems.map((task,index)=>{
    return <li key={index}>{task.label}</li>
    
})}</ul>

        </div>
        
    )
}

export default Todo;