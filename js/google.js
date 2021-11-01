// Form to Google Sheets
const form = document.forms['google-sheet'];
const spinner = document.getElementById('spinner');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  spinner.removeAttribute('hidden');

  fetch(
    'https://script.google.com/macros/s/AKfycbxS9Ddcv6P5Pk6KqlvMaC1CaDnqagwmC46YjdRwM2IO2Zr6gJSG4DNu7f9xQnie9chz9g/exec',
    {
      method: 'POST',
      body: new FormData(form),
    }
  )
    .then(() => spinner.setAttribute('hidden', ''))
    .catch((error) => console.error('Error!', error.message));
});
