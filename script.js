// eslint-disable-next-line no-unused-vars
function mobileMenu() {
  const x = document.getElementById('mobMenu');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}

// Dynamic part of website

const works = [
  {
    title: 'Tonic',
    image: 'assets/tonic.svg',
    see: 'https://nedramrez.github.io/portfolio',
    repo: 'https://github.com/nedramrez/portfolio',
  },
  {
    title: 'Multi-post stories',
    image: 'assets/snapshoot-portfolio.svg',
    see: 'https://nedramrez.github.io/portfolio',
    repo: 'https://github.com/nedramrez/portfolio',
  },
  {
    title: 'Tonic',
    image: 'assets/snapshot-card-3.svg',
    see: 'https://nedramrez.github.io/portfolio',
    repo: 'https://github.com/nedramrez/portfolio',
  },
  {
    title: 'Multi-post stories',
    image: 'assets/snapshot-card-4.svg',
    see: 'https://nedramrez.github.io/portfolio',
    repo: 'https://github.com/nedramrez/portfolio',
  },
];

const details = {
  client: 'CANOPY',
  role: 'Back End Dev',
  year: '2015',
  description: 'This represents my expertise in Backend development.',
};

const tags = {
  html: 'html',
  css: 'css',
  javascript: 'javascript',
};

works.forEach(work => { // eslint-disable-line
  const portfolio = document.querySelector('#portfolio');
  const cardWorks = document.createElement('div');
  cardWorks.classList.add('card-works');
  cardWorks.innerHTML = `
    <div class="snapshot-portfolio">
      <img class="snp-p-img" src=${work.image} width="295" height="220">
    </div>
    <div class="left-block">
      <div class="primary-text-3">
          <h5 class="tonic">${work.title}</h5>
          <div class="frame">
            <div class="client">
              <h6>${details.client}</h6>
            </div>
            <div>
              <img class="counter" src="assets/counter.svg" alt="counter">
            </div>
            <div class="role">
              <span>${details.role}</span>
            </div>
            <div>
              <img class="counter" src="assets/counter.svg" alt="counter">
            </div>
            <div class="year-label">
              <span>${details.year}</span>
            </div>
        </div>
      </div>
      <p class="primary-text-4">${details.description}</p>
      <div class="tags">
        <ul>
          <li>
            <div class="tag-html">
              <span>${tags.html}</span>
            </div>
          </li>
          <li>  
            <div class="tag-css">
              <span>${tags.css}</span>
            </div>
          </li>
          <li>
            <div class="tag-js">
              <span>${tags.javascript}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="action">
        <div class="see-project">
          <button onclick="detailsPp()" class="see-pp">See Project</button>
        </div>
      </div>
    </div>
  `;
  portfolio.appendChild(cardWorks);
});

// eslint-disable-next-line
const detailsPp = function (detail) {
  const x = document.getElementById('pp-details');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
};
