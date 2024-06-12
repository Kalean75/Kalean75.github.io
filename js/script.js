
$(function() {
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Hide navbar
  $(".navbar-fade").hide();

  $('.header').click(function() {
    // Getting the next elements
    var $graphics = $(this).next();
    var $graphics2 = $graphics.next();

    // Open up the content needed - toggle the slide
    $graphics.slideToggle(500);
    $graphics2.slideToggle(500);
  });

  // Fade in .navbar
  $(window).scroll(function() {
    // Set distance user needs to scroll before fadeIn
    if ($(this).scrollTop() > 90) {
      $('.navbar-fade').fadeIn("fast");
    } else {
      $('.navbar-fade').fadeOut();
    }
  });

  // Add smooth scrolling to navbar + footer
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure hash has value
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Hide navbar
      $(".navbar-fade").hide();

      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function() {
        // Add hash (#) to URL when done scrolling
        window.location.hash = hash;
      });
    }
  });
});


const generateQuote = () => {
  var quote = ["\"Look to those who walked before to lead those who walk after\"",
    "\"A journey of a thousand miles begins with a single step\"", "\"Wherever you go, go with all your heart.\"", "\"Fortune favors the bold!\""];
  var min = 0;
  var max = quote.length - 1;
  var randNum = Math.floor(Math.random() * (max - min + 1) + min);
  document.getElementById("quote").innerText = quote[randNum];
  document.getElementById("quote").style.fontStyle = "italic";
}

const changePhoto = () => {
  var elements = document.getElementsByClassName("Icon");
  for (i = 0; i < elements; i++) {
    elements[i].value = "./img/lettuce.jpg"
  }

}

const body = document.body
const btnTheme = document.querySelectorAll('.fa-moon')[0];
const btnTheme2 = document.querySelectorAll('.fa-moon')[1];
const btnHamburger = document.querySelector('.fa-bars')

const addThemeClass = (bodyClass, btnClass) => {
    body.classList.add(bodyClass)
    btnTheme.classList.add(btnClass)
    btnTheme2.classList.add(btnClass)
}

const getBodyTheme = localStorage.getItem('portfolio-theme')
const getBtnTheme = localStorage.getItem('portfolio-btn-theme')
const getBtnTheme2 = localStorage.getItem('portfolio-btn-theme2')

addThemeClass(getBodyTheme, getBtnTheme)
addThemeClass(getBodyTheme, getBtnTheme2)


const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, btnClass) => {

    body.classList.remove(localStorage.getItem('portfolio-theme'))
    btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))
    btnTheme2.classList.remove(localStorage.getItem('portfolio-btn-theme2'))

    addThemeClass(bodyClass, btnClass)

    localStorage.setItem('portfolio-theme', bodyClass)
    localStorage.setItem('portfolio-btn-theme', btnClass)
    localStorage.setItem('portfolio-btn-theme2', btnClass)
}

const toggleTheme = () =>
    isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun')

btnTheme.addEventListener('click', toggleTheme)
btnTheme2.addEventListener('click', toggleTheme)

// const displayList = () => {
//     const navUl = document.querySelector('.nav__list')

//     if (btnHamburger.classList.contains('fa-bars')) {
//         btnHamburger.classList.remove('fa-bars')
//         btnHamburger.classList.add('fa-times')
//         navUl.classList.add('display-nav-list')
//     } else {
//         btnHamburger.classList.remove('fa-times')
//         btnHamburger.classList.add('fa-bars')
//         navUl.classList.remove('display-nav-list')
//     }
// }

// btnHamburger.addEventListener('click', displayList)

// const scrollUp = () => {
//     const btnScrollTop = document.querySelector('.scroll-top')

//     if (
//         body.scrollTop > 500 ||
//         document.documentElement.scrollTop > 500
//     ) {
//         btnScrollTop.style.display = 'block'
//     } else {
//         btnScrollTop.style.display = 'none'
//     }
// }

// document.addEventListener('scroll', scrollUp)



