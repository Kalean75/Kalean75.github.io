
function generateQuote() {
  var quote = ["\"Look to those who walked before to lead those who walk after\"",
    "\"A journey of a thousand miles begins with a single step\"", "\"Wherever you go, go with all your heart.\"", "\"Fortune favors the bold!\""];
  var min = 0;
  var max = quote.length - 1;
  var randNum = Math.floor(Math.random() * (max - min + 1) + min);
  document.getElementById("quote").innerText = quote[randNum];
  document.getElementById("quote").style.fontStyle = "italic";
}

//Temporary display function
/*function display() 
{
  var x = document.getElementById("content");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}*/

//Temporary display function
/*function display2() 
{
  var x = document.getElementById("content2");
  if (x.style.display === "none") 
  {
    x.style.display = "block";
  }
  else 
  {
    x.style.display = "none";
  }
}*/

//Jquery
(function ($) 
{

  //fade in navbar
  $(document).ready(function () 
  {
    // Initialize Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // hide navbar
    $(".navbar-fade").hide();

    $('.header').click(function () 
    {

      $header = $(this);
      //getting the next element
      $graphics = $header.next();
      //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
      $graphics.slideToggle(500, function () 
      {
        //execute this after slideToggle is done
          return $graphics.is(":visible");
      });
      });
    //change icon on collapse/expand
    $('.glyphicon').click(function () {
      $(this).toggleClass("glyphicon-plus-sign").toggleClass("glyphicon-minus-sign");
    });
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
