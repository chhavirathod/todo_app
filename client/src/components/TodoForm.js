"use client"

import axios from "axios";
import { useState } from "react";

const TodoForm=({
    fetchTodos
})=>{
    const [task, setTask] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(!task.trim()) return;

        try{
            await axios.post("http://localhost:5000/api/todos", {task})
            setTask("")
            fetchTodos()
        }
        catch(err){
            console.log("error adding task: ", err)
        }
    }

    return(
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input value={task} onChange={(e) => setTask(e.target.value)} type="text" placeholder="Enter a text..." className="border p-2 w-full rounded" />
            <button className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded">Add</button>
        </form>
    )
}

export default TodoForm;