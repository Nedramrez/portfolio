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

const works = [
  {
      title: "Tonic",
      image: "../assets/tonic.svg",
  },
  {
    title: "Multi-post stories",
    image: "../assets/snapshoot-portfolio.svg",
    },  
  {
      title: "Tonic",
      image: "../assets/snapshot-card-3.svg",
      client: "CANOPY"
    },  
  {
      title: "Multi-post stories",
      image: "../assets/snapshot-card-4.svg",
  },
  
]

const client = "CANOPY";
const role = "Back End Dev"
const year = "2015"

works.forEach(work => {
	let portfolio = document.querySelector('#portfolio')
  let cardWorks = document.createElement('div');
  cardWorks.classList.add('card-works')

  cardWorks.innerHTML = cardWorks.innerHTML + `
    <div class="snapshot-portfolio">
      <img class="snp-p-img" src=${work.image} width="295" height="220">
    </div>
    <div class="left-block">
      <div class="primary-text-3">
          <h5 class="tonic">${work.title}</h5>
          <div class="frame">
            <div class="client">
              <h6>${client}</h6>
            </div>
            <div>
              <img class="counter" src="assets/counter.svg" alt="counter">
            </div>
            <div class="role">
              <span>${role}</span>
            </div>
            <div>
              <img class="counter" src="assets/counter.svg" alt="counter">
            </div>
            <div class="year-label">
              <span>${year}</span>
            </div>
        </div>
      </div>
      <p class="primary-text-4">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
      <div class="tags">
        <ul>
          <li>
            <div class="tag-html">
              <span>html</span>
            </div>
          </li>
          <li>  
            <div class="tag-css">
              <span>css</span>
            </div>
          </li>
          <li>
            <div class="tag-js">
              <span>javaScript</span>
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
  `
  portfolio.appendChild(cardWorks);
});



