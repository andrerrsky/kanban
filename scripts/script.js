const createCard = (title, description, type) => {
  const card = document.createElement('div');
  card.setAttribute('class', 'card');
  card.innerHTML = `
    <div class="card-title">
      <h3>${title}</h3>
    </div>
    <div class="card-body">
      <p>${description}</p>
    </div>
    <hr>
    <div class="card-bottom">
      <img class="js-edit" src="img/editar.png" alt="editar">
      <img class="js-delete" src="img/excluir.png" alt="deletar">
    </div>
  `;

  document.getElementById(type).appendChild(card);
}

const getFromStorage = () => {
  let tasks = JSON.parse(localStorage.getItem('Task'));
  if(!tasks) return [];

  return tasks;
}

getFromStorage().forEach(task => {
  createCard(task.title, task.description, 'todo');
})




