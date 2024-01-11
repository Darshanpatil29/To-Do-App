let add=document.querySelector('#push')
add.addEventListener('click',()=>{
    taskDo()
})

window.addEventListener('keypress',(e)=>{
    if(e.key==='Enter'){
        taskDo()
    }
})

const taskDo=()=>{
    let task=document.querySelector('input')
    task.value.trim()
    if(task.value.length==0){
        alert('enter the Task')
    }
    else{
        document.querySelector('#tasks').innerHTML +=`
        <div class="task">
            <span id="taskname">
                ${task.value}
            </span>
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>`
        task.value=''
        let deleteTask=document.querySelectorAll('.delete')
        deleteTask.forEach((p)=>{
            p.addEventListener('click',(e)=>{
               p.parentNode.remove()
            })
        })
        let completeTask=document.querySelectorAll('.task')
        completeTask.forEach((p)=>{
            p.addEventListener('click',(e)=>{
                const dash=Array.from(p.childNodes)
                // dash[1].setAttribute('class','completed')
                dash[1].classList.toggle('completed') // toogle is used for change state backandforth
            })
        })
    }
}