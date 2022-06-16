// eslint-disable-next-line no-unused-vars
function mobileMenu() {
  const x = document.getElementById('mobMenu');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}

// eslint-disable-next-line no-unused-vars
function detailsPp() {
  const x = document.getElementById('pp-details');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}

const allCards = {
  firstCard: {
    name: 'Tonic',
    image: '.assets/desktop-snapshoot-1.svg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    seeLive: 'https://nedramrez.github.io/portfolio/',
    seeSource: 'https://github.com/nedramrez/portfolio',
  },
  secondCard: {
    name: 'Tonic',
    image: '.assets/desktop-snapshoot-1.svg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    seeLive: 'https://nedramrez.github.io/portfolio/',
    seeSource: 'https://github.com/nedramrez/portfolio',
  },
  thirdCard: {
    name: 'Tonic',
    image: '.assets/desktop-snapshoot-1.svg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    seeLive: 'https://nedramrez.github.io/portfolio/',
    seeSource: 'https://github.com/nedramrez/portfolio',
  },
  fourthCard: {
    name: 'Tonic',
    image: '.assets/desktop-snapshoot-1.svg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    seeLive: 'https://nedramrez.github.io/portfolio/',
    seeSource: 'https://github.com/nedramrez/portfolio',
  },
};

window.localStorage.setItem('allCards', JSON.stringify(allCards));
