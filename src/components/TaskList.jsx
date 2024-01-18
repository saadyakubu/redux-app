import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../actions";

const TaskList = ()=> {
    const tasks = useSelector((state)=> state.tasks);
    const dispatch = useDispatch();

    const handleDelete = (id)=>{
        dispatch(deleteTask(id));
    };

    return (
        <div className="tasklist">
            <div className="display-tasks">
                <h3>Your tasks:</h3>
                <ul className="tasks">
                    {tasks.map((task)=>(
                        <li className="task" key={task.id}>
                            {task.task}
                            <button className="delete-btn" onClick={handleDelete(task.id)}>delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default TaskList;