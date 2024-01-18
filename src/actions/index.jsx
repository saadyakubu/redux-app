export const addTask = (task) =>{
    return {
        type: "ADD_TASK",
        payload: {
            id: new Date().getTime(),
            text: task
        },
    };
};

export const deleteTask = (id) =>{
    return {
        type: "DELETE_TASK",
        payload: id,
    };
};