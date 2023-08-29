// Get references to the button and modal
const openModalButton = document.getElementById('openModalButton');
const modal = document.getElementById('myModal');

// Open modal on button click
openModalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Make button sticky on scroll
window.addEventListener('scroll', () => {
  if (window.scrollX > 50) {
    openModalButton.style.position = 'sticky';
    openModalButton.style.bottom = '0';
  } else {
    openModalButton.style.position = 'fixed';
    openModalButton.style.bottom = '50px';
  }
});