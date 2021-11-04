// Form to Google Sheets
const form = document.forms['google-sheet'];
const spinner = document.getElementById('spinner');
const modal = document.getElementById('modal');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  spinner.removeAttribute('hidden');
  setOpacityLow();

  fetch(
    'https://script.google.com/macros/s/AKfycbxS9Ddcv6P5Pk6KqlvMaC1CaDnqagwmC46YjdRwM2IO2Zr6gJSG4DNu7f9xQnie9chz9g/exec',
    {
      method: 'POST',
      body: new FormData(form),
    }
  )
    .then(() => spinning())
    .catch((error) => console.error('Error!', error.message));
});

const spinning = () => {
  spinner.setAttribute('hidden', '');
  setModal();

  // add a modal, listen if modal is closed
};

const setOpacityLow = () => {
  document.getElementById('scroll-top').style.opacity = '0.4';
  document.getElementById('header').style.opacity = '0.4';
  document.getElementById('main').style.opacity = '0.4';
};

const setOpactiyHigh = () => {
  document.getElementById('scroll-top').style.opacity = '0.7';
  document.getElementById('header').style.opacity = '1';
  document.getElementById('main').style.opacity = '1';
};

const setModal = () => {
  modal.removeAttribute('hidden');
  document.getElementById('close').addEventListener('click', () => {
    modal.setAttribute('hidden', '');
    setOpactiyHigh();
  });
};

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.setAttribute('hidden', '');
    setOpactiyHigh();
  }
});
