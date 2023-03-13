const modal = document.getElementById('modal')
const closeButton = document.getElementById('close-button')
const inputTitle = document.getElementById('input-title')
const inputDescription = document.getElementById('input-description')
const createButton = document.getElementById('create-button')

// botao de teste para abrir modal - será removido posteriormente
const openModalButton = document.getElementById('open-modal')

let title = ''
let description = ''

const openModal = () =>{
    modal.setAttribute('style', 'display : flex')
}
const closeModal = () =>{
    modal.setAttribute('style', 'display : none')
}
const createTask = () =>{
    if(title.length < 3){
        alert('Titulo deve conter no mímino 3 caracteres')
    }else{
        if(description.length < 3){
            alert('Descrição deve conter no mímino 3 caracteres')
        }else{
            setStorage(title, description)
        }
    }
}
openModalButton.addEventListener('click', openModal)
closeButton.addEventListener('click', closeModal)
inputTitle.addEventListener('keyup', (e)=>{ title = e.target.value })
inputDescription.addEventListener('keyup', (e)=>{ description = e.target.value })
createButton.addEventListener('click', createTask)

const setStorage = (title, description) =>{
    let Tasks = []
    let task = {
        'title' : title,
        'description' : description
    }
    if(getStorage()){
        Tasks = Tasks.concat(getStorage())
    }
    Tasks.push(task)
    localStorage.setItem('Task', JSON.stringify(Tasks) )
    closeModal()
}
const getStorage = () =>{
    let Tasks = JSON.parse( localStorage.getItem('Task') )
    if(Tasks){
        return Tasks
    }
}