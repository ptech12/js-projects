// Project #5: TODO List
// Variables

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');


// Event Listners: 
// Add Button
addTask.addEventListener('click', () => {
    let task = document.createElement('div');
    task.classList.add('task');


    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    
    task.appendChild(li);
    
    // func: add & delete button

    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    // task.appendChild(checkButton);
    task.append(deleteButton);
    task.append(checkButton);
    // task.appendChild(deleteButton);

    if(inputTask.value === ""){
        alert("Please Enter a Task");
    }else{
        taskContainer.appendChild(task);
    }
    
    // inputTask.value = ""


})