const buttons = document.querySelectorAll('.tag-buttons button');
const cards = document.querySelectorAll('.content-card');
const search = document.getElementById('search');

function updateVisibleCards() {
    const searchTerm = search.value.toLowerCase().trim();
  cards.forEach(card => {
    const cardTags = card.dataset.ctntags.split(',');
    const cardTitle = card.querySelector('.title').textContent.toLowerCase() || '';

    const isVisible = cardTags.every(tag => {
      const btn = document.querySelector(`.tag-buttons button[data-tag="${tag}"]`);
      return btn?.dataset.active === 'true';
    });
    const matchesSearch = cardTitle.includes(searchTerm);
    card.style.display = (isVisible && matchesSearch) ? 'flex' : 'none';
  });
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const isActive = button.dataset.active === 'true';
    button.dataset.active = isActive ? 'false' : 'true';
    button.classList.toggle('inactive', !isActive);

    updateVisibleCards();
  });
});

search.addEventListener('input', updateVisibleCards);

updateVisibleCards();

const previewbttn = document.querySelectorAll('#preview-bttn');
const previewctn = document.querySelectorAll('.preview-ctn');

previewbttn.forEach(bttn => {
  bttn.addEventListener('click', () => {
    const targetId = bttn.getAttribute('data-target');

    previewctn.forEach(pctn => pctn.classList.remove('active'));

    const targetCtn = document.getElementById(targetId);
    if (targetCtn) {
      targetCtn.classList.add('active');
    }
  })
})

const closePreview = document.querySelector('.close-preview');
closePreview.addEventListener('click', () => {
  previewctn.forEach(pctn => pctn.classList.remove('active'));
})

