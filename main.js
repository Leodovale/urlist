window.addEventListener('load', ()=>{
    const form = document.querySelector('#form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskvalue = input.value;

        if (!taskvalue){
            alert("Por favor preencha o afazer.")
            return;  
        } 

        const task_el = document.createElement("div");
        task_el.classList.add("taskvalue")

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("task");
        task_content_el.innerText = taskvalue;

        task_el.appendChild(task_content_el);

        list_el.appendChild(task_el);
    })
})