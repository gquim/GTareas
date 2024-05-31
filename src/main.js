import { Tarea } from "./task.js";
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

let tareas=[];

function addTask(descripcion){
    const newTask = new Tarea(descripcion);
    tareas.push(newTask);
    renderTask();
}

function renderTask(){
    taskList.innerHTML = '';
    tareas.forEach(tarea =>{
        const li = document.createElement('li')
        li.textContent = tarea.descripcion;
        
        //boton para eliminar tareas
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Eliminar";
        deleteBtn.classList.add('eliminar-btn');
        deleteBtn.addEventListener('click',()=>{
            deleteTask(tarea);
        })


        if(tarea.completado){
            li.classList.add('completada');
        }
        //a
        li.addEventListener('click',()=>{
            tarea.tareaCompletada();
            renderTask();
        });
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    })

}

taskForm.addEventListener('submit',event =>{
    event.preventDefault();
    const descripcion = taskInput.value.trim();
    if (descripcion !== ''){
        addTask(descripcion);
        taskInput.value = "";
    }
})
//funcion para eliminar tareas
function deleteTask(taskDelete){
    tareas = tareas.filter(tarea => tarea !== taskDelete);
    renderTask();
}

renderTask();