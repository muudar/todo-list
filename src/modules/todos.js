const todo = (title, description, dueDate, priority) => {
    var done = false;
    return {title, description, dueDate, priority, done};
}

const loadToDos = (list) =>{
    const todos = document.getElementsByClassName("todos")[0];
    todos.innerHTML = "";
    for(var i = 0; i < list.length; i++){
        const todoTask = document.createElement("div");
        todoTask.classList.add("todo-task")
        const leftSideTask = document.createElement("div");
        leftSideTask.classList.add("left-side-task")
        const input = document.createElement("input");
        input.type = "checkbox";
        input.classList.add("round");
        leftSideTask.appendChild(input);
        const taskTitle = document.createElement("div");
        taskTitle.classList.add("task-title");
        taskTitle.textContent = list[i].title;
        const taskDescription = document.createElement("div");
        taskDescription.classList.add("task-description");
        taskDescription.textContent = list[i].description;
        taskTitle.appendChild(taskDescription);
        leftSideTask.appendChild(taskTitle);
        const rightSideTask = document.createElement("div");
        rightSideTask.classList.add("right-side-task");
        const taskDate = document.createElement("div");
        taskDate.classList.add("task-date");
        var dueDate = new Date(list[i].dueDate);
        taskDate.textContent = dueDate.getDate() + "/" + (dueDate.getMonth() + 1 )+ "/" + dueDate.getFullYear();
        rightSideTask.appendChild(taskDate);
        const span = document.createElement("span");
        span.classList.add("material-symbols-outlined");
        span.textContent = "delete";
        rightSideTask.appendChild(span);
        todoTask.appendChild(leftSideTask);
        todoTask.appendChild(rightSideTask);
        todos.appendChild(todoTask);
        todoTask.classList.add("priority-" + list[i].priority);
    }
} 

export {loadToDos, todo};