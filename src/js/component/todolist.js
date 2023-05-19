import React, { useEffect, useState } from "react";

const Todo = () =>{
    const [listItems,setlistItems] = useState([]);
    useEffect(() =>{
        fetch("https://assets.breatheco.de/apis/fake/todos/user/rubengargu")
        .then(response =>{
            
            return response.json()
        }
    ).then(response=>{setlistItems(response)})
    },[])
     
    return(
        <div id="container">
<p>setlistItems.map(</p>

        </div>
        
    )
}

export default Todo;