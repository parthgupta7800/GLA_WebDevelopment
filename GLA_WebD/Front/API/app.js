const inputTask = document.querySelector('.enterTask');
const inputDesc = document.querySelector('.enterDesc');

const addBtn = document.querySelector('.addTask');
const deleteBtn = document.querySelector('.deleteTask');
const showTask = document.querySelector('.taskName');

function addTask(){
    showTask.innerHTML += `<div class="box">
    <p class="tasks">Task: ${inputTask.value}</p>
    <p>Task Description: ${inputDesc.value}</p></div>`

  }
addBtn.addEventListener('click',function(){
  addTask();
  inputTask.value = "";
  inputDesc.value = "";
})

deleteBtn.addEventListener('click',function(){
    showTask.innerHTML = "";
})