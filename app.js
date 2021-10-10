// Initial page load - If someone visits a URL directly instead of clicking our links/buttons
const startingLocation = window.location.pathname;

if (startingLocation == '/') renderHome();
if (startingLocation == '/wedding') renderWedding();

// const homeBtn = document.getElementById('home');
// const weddingBtn = document.getElementById('wedding');

// console.log(homeBtn);
// console.log(weddingBtn);

// If someone clicks our buttons/links
document.getElementById('home').addEventListener('click', () => {
  history.pushState({ page: 'home' }, null, '/');
  renderHome();
});

document.getElementById('wedding').addEventListener('click', () => {
  history.pushState({ page: 'wedding' }, null, 'wedding');
  renderWedding();
});

// When someone uses the browser back/forward buttons
window.onpopstate = (e) => {
  if (e.state.page == 'home') renderHome();
  if (e.state.page == 'wedding') renderWedding();
};

// The actual functions that modify the DOM
function renderHome() {
  document.getElementById('content').innerHTML = `
  <div class="container">
  <div class="card">
    <div class="img">
      <img src="img/black.jpg" alt="" />
    </div>

    <div class="main">
      <div class="main-header">
        <div class="main-header-button">
        </div>
        <div class="main-header-date">
          <p>27.August 2022</p>
        </div>
      </div>

      <div class="main-info">
        <h1 class="main-info-title">Mir hürated</h1>
        <p class="main-info-p">
          und froied ois, de wunderbari Tag mit dir dörfe z'verbringe! Stoos mit eus ah, wenn mir eus, euses Ja-Wort gebed.
        </p>
        <br />
        <p class="main-info-p">
          Wiiteri Infos zur Location und zur Ameldig folged.
        </p>
      </div>

      <div class="main-infoBtn">
        <div class="main-infoBtn-center">
          <button class="btn2" id="home">Home</button>
          <button class="btn2" id="wedding">Fiir mit eus</button>
        </div>
      </div>
    </div>
  </div>
</div>

  `;
}

function renderWedding() {
  document.getElementById('content').innerHTML = `
  <h2>About Us</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <button class="btn2" id="home">Home</button>
  `;
}
