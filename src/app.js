const switchElement = document.querySelector('.switch') // Day-Night mode toggle

const hamburgerButton = document.getElementById('hamburger') // Hamburger menu toggle
const navList = document.getElementById('nav-list')
const icon = document.querySelector('.hamburger i')

switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

function toggleButton() {
  navList.classList.toggle('show')
}

// Hamburger menu toggle
hamburgerButton.addEventListener('click', () => {
  navList.classList.toggle('show');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
  switchElement.classList.toggle('switch-hide')
})


// Start back to top button section
mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()}; // When user scrolls down 20px from top, show button

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() { // When user clicks button, scroll to top
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
