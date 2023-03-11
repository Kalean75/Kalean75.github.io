
function generateQuote() 
{
  var quote = ["\"Look to those who walked before to lead those who walk after\"",
    "\"A journey of a thousand miles begins with a single step\"", "\"Wherever you go, go with all your heart.\"","\"Fortune favors the bold!\""];
  var min= 0;
  var max = quote.length - 1;
  var randNum = Math.floor(Math.random() * (max-min + 1)+min);
  document.getElementById("quote").innerText = quote[randNum];
}


(function ($) {
  $(document).ready(function () {
    // Initialize Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // hide navbar
    $(".navbar-fade").hide();

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
