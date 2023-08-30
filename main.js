const openModalButton = document.getElementById('openModalButton');
const modal = document.getElementById('myModal');
const closeButtons = document.querySelectorAll('.close');

// Open modal on button click
openModalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close modal when clicking on close buttons
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});

// Close modal when clicking outside the modal content
window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Make button sticky on scroll (your existing code)
window.addEventListener('scroll', () => {
  // ... your existing scroll event code ...
});