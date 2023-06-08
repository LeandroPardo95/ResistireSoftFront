import React, {useState} from 'react'
import Todo from './todo';

const initialState = [
    {
        id:1,
        name:"Tarea 1",
        description: "Esta es la tarea numero 1",
        completed: false 
    },
    {
        id:2,
        name:"Tarea 2",
        description: "Esta es la tarea numero 2",
        completed: true
    },
    {
        id:3,
        name:"Tarea 3",
        description: "Esta es la tarea numero 3",
        completed: false
    }
]



const TodoList = () => {

    const [todos,setTodos] = useState(initialState)

    return (
        <div className='todoList'>
            {
                todos.map(todo=> todo.completed?<Todo todo={todo} key={todo.id}/>:'')
            }
        </div>
    )
}

export default TodoList;