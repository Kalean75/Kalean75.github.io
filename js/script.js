
function generateQuote() {
  var quote = ["\"Look to those who walked before to lead those who walk after\"",
    "\"A journey of a thousand miles begins with a single step\"", "\"Wherever you go, go with all your heart.\"", "\"Fortune favors the bold!\""];
  var min = 0;
  var max = quote.length - 1;
  var randNum = Math.floor(Math.random() * (max - min + 1) + min);
  document.getElementById("quote").innerText = quote[randNum];
  document.getElementById("quote").style.fontStyle = "italic";
}

function changePhoto() {
  var elements = document.getElementsByClassName("Icon");
  for (i = 0; i < elements; i++) {
    elements[i].value = "./img/lettuce.jpg"
  }

}

//Jquery
(function ($) {

  //fade in navbar
  $(document).ready(function () {
    // Initialize Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // hide navbar
    $(".navbar-fade").hide();

    $('.header').click(function () {

      $header = $(this);
      //getting the next element
      $graphics = $header.next();
      $graphics2 = $graphics.next();
      //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
      $graphics.slideToggle(500, function () {
        //execute this after slideToggle is done
        return $graphics.is(":visible");
      });

      $graphics2.slideToggle(500, function () {
        //execute this after slideToggle is done
        return $graphics2.is(":visible");
      });
    });
    //change icon on collapse/expand
    //$('.glyphicon').click(function () {
    //$(this).toggleClass("glyphicon-plus-sign").toggleClass("glyphicon-minus-sign");
    //});
    // fade in .navbar
    $(function () {
      $(window).scroll(function () {

        // set distance user needs to scroll before fadeIn
        if ($(this).scrollTop() > 90) {
          $('.navbar-fade').fadeIn("fast");
        } else {
          $('.navbar-fade').fadeOut();
        }
      });
    });

    // Add smooth scrolling to navbar + footer
    $(".navbar a, footer a[href='#myPage']").on('click', function (event) {

      //make sure hash has value
      if (this.hash !== "") {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        $(".navbar-fade").hide();

        // Using jQuery's animate() method to add smooth page
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function () {

          // Add hash (#) to URL when done scrolling
          window.location.hash = hash;
        });
      }
    });
  })
}(jQuery));

/**document.addEventListener("DOMContentLoaded", function () 
{
  // Initialize Tooltip
  var tooltips = document.querySelectorAll('[data-toggle="tooltip"]');
  tooltips.forEach(function (tooltip) {
    new bootstrap.Tooltip(tooltip);
  });

  // Hide navbar
  var navbar = document.querySelector(".navbar-fade");
  if (navbar) 
  {
    navbar.style.display = "none";
  }

  // Handle header click
  var headers = document.querySelectorAll(".header");
  headers.forEach(function (header) 
  {
    header.addEventListener("click", function () {
      var graphics = header.nextElementSibling;
      var graphics2 = graphics.nextElementSibling;

      // Toggle slide
      toggleSlide(graphics);
      toggleSlide(graphics2);
    });
  });

  function toggleSlide(element) {
    if (window.getComputedStyle(element).display === "none") 
    {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }

  // Fade in navbar on scroll
  var navbarFade = document.querySelector('.navbar-fade');
  if (navbarFade) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 90) {
        navbarFade.style.display = "block";
      } else {
        navbarFade.style.display = "none";
      }
    });
  }

  // Smooth scrolling for navbar and footer links
  var navbarLinks = document.querySelectorAll(".navbar a");
  var footerLink = document.querySelector("footer a[href='#myPage']");

  function scrollToElement(element) {
    var targetId = element.getAttribute("href").substring(1);
    var targetElement = document.getElementById(targetId);
    if (targetElement) {
      document.querySelector(".navbar-fade").style.display = "none";
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth"
      });
    }
  }

  if (navbarLinks) {
    navbarLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        scrollToElement(link);
      });
    });
  }

  if (footerLink) {
    footerLink.addEventListener("click", function (event) {
      event.preventDefault();
      scrollToElement(footerLink);
    });
  }
});**/

