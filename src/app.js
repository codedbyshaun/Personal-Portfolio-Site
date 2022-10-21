const switchElement = document.querySelector('.switch') // Day-Night mode toggle

const hamburgerButton = document.getElementById('hamburger') // Hamburger menu toggle
const navList = document.getElementById('nav-list')

switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

function toggleButton() {
  navList.classList.toggle('show')
}

// Hamburger menu toggle
hamburgerButton.addEventListener('click', toggleButton) // Hamburger menu toggle

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
// End back to top button section


// const man = document.querySelector('.face')

// let count = 0

// function moveMan() {
//     count += 50
//     console.log(count)
//     man.style.left = count + 'px'     
// }

// man.addEventListener('click', moveMan)

