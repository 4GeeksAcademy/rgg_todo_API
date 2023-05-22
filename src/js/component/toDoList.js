import React, {useState, useEffect}  from "react";

const Todo_list = () => {

    const [listItems, setListItems] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState (null);
    const [element, setElement] = useState("");

    useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/carlosgarciare2")
        .then (response => {
			return response.json()
		})
		.then (response => {
			setListItems(response)
		})
	}, [])

    const addTask = () => {
        if (element !== '') {
          const newTask = {
            label: element,
            done: false
          };
      
          const addData = {
            method: "PUT",
            body: JSON.stringify([...listItems, newTask]),
            headers: {
              "Content-Type": "application/json"
            }
          };
      
          fetch(
            "https://assets.breatheco.de/apis/fake/todos/user/carlosgarciare2",
            addData
          )
            .then((response) => response.json())
            .then(() => {
                setListItems([...listItems, newTask]);
                setElement('');
            });
        }
      };

    const handleMouseEnter = (index) => {
        setHoveredIndex(index)
    };
    
    const handleMouseLeave = (index) => {
        setHoveredIndex(null)
    };

    const handleDelete = (index) => {
		const updatedListItems = [...listItems];
		updatedListItems.splice(index, 1);
		setListItems(updatedListItems);

        const updateData = {
            method: "PUT",
            body: JSON.stringify(updatedListItems),
            headers: {
                "Content-Type": "application/json"
             }
        };

    fetch(
    "https://assets.breatheco.de/apis/fake/todos/user/carlosgarciare2",
    updateData
    )
    .then((response) => response.json())
    .then((response) => {
        setListItems(updatedListItems)
    })
	  };

    
    const handleChange = (event) =>{
		setElement(event.target.value);
	};

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          addTask(ListItems);
        }
      };

    
    return(
        <div className="container">
            <div className="title">
                <h1>TO DO LIST</h1>
            </div>
            <div className="grupo">
                <div class="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Write here your tasks" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleChange} value={element} />
                        <button class="btn btn-outline-light" type="button" id="button-addon2" onClick={addTask}>Add</button>
                </div>
                <div className="caja">
                    <ol>
                        {
                            listItems.map((list,index) => {
                                return (
                                    <li key={index} className="tasks" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={(index) => handleMouseLeave()}
                                    >
                                    {list.label} {list.done} 
                                    {hoveredIndex === index && (
						                <button onClick={ () => handleDelete(index)} className="cruz">X</button>
					                )}
                                    </li>
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
            <p className="suma">Tasks left: {listItems.length}</p>
        </div>
    );
};

export default Todo_list;