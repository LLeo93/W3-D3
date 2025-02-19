const footerSpan = document.getElementById('current-year');
const year = new Date().getFullYear();
footerSpan.innerText = year;
const listForm = document.getElementById('new-Task');
listForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const listInput = document.getElementById('task');

  const list = {
    listName: listInput.value,
  };

  const card = document.createElement('div');
  card.classList.add('contact-card');
  card.innerHTML = `<p>${listName}<p><button onclick="deleteCard(event)">ELIMINA</button>`;
  const cardContainer = document.getElementById('saved-list');
  cardContainer.appendChild(card);
  listInput.value = '';
});
const deleteCard = function (e) {
  console.log('ELIMINA', e.target.parentElement);
  // e.target è il bottone
  // e.target.parentElement è la card
  const pressedButton = e.target;
  const cardToRemove = pressedButton.parentElement; // il contenitore del bottone
  cardToRemove.remove(); // elimino la card
};
