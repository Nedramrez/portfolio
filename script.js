// eslint-disable-next-line no-unused-vars
function mobileMenu() {
  const x = document.getElementById('mobMenu');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}

//The details popup window

const works = document.querySelector('#portfolio');

const cardWorks = document.createElement('div');
cardWorks.classList.add('card-works');
cardWorks.textContent = '';

works.appendChild(cardWorks);