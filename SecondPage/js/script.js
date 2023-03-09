//Homepage Jquery
//Changes image to have hat or not have it when clicked
$(function ()
{
    $('#Runewerksimg2').hide();
    $('#Runewerksimg').on('click', function ()
    {
        $(this).hide();
        $('#Runewerksimg2').show();
    });
    $('#Runewerksimg2').on('click', function ()
    {
        $(this).hide();
        $('#Runewerksimg').show();
    });

//About Us Jquery
//sidenav bar
    $(document).ready(function () {
        //start#navigation
        $('#navigation').hover(
                function () {
                    $(this).stop().animate(
                            {
                                left: '0',
                                backgroundColor: '#38a395'
                            },
                            500, 'easeInSine'); // end animate
                },
                function () {
                    $(this).stop().animate(
                            {
                                left: '-130px',
                                backgroundColor: 'black'
                            },
                            1500, 'easeOutBounce'); // end animate
                }
        ); // end hover

//Show quote when clicking team member Image
        $(document).ready(function () {

            $(".slidingDiv").hide();
            $(".show_hide").show();

            $('.show_hide').click(function () {

                //$(".slidingDiv").slideToggle();
                var isvisible = $(this).next('.slidingDiv').is(':visible');

                if (isvisible) {
                    $(this).next('.slidingDiv').hide();
                } else {
                    $(this).next('.slidingDiv').show();
                }
            });

        });

//show team memebers when clicked
        $(document).ready(function () {
            $('#teamtoggle').hide();
            $('.close').hide();
            $('.meetteam').click(function () {
                var isvisible = $('#teamtoggle').is(':visible');
                if (isvisible) {
                    $('#teamtoggle').hide();
                    $('.close').hide();
                    $('.open').show();
                } else
                {
                    $('#teamtoggle').show();
                    $('.close').show();
                    $('.open').hide();
                }
            })
        });

//Form JQuery
//show contact form  when clicked
        $(document).ready(function () {
            $('#showform').hide();
            $('.formtoggle').click(function () {
                var isvisible = $('#showform').is(':visible');
                if (isvisible) {
                    $('#showform').hide();
                    $('.close').hide();
                    $('.open').show();
                } else
                {
                    $('#showform').show();
                    $('.close').show();
                    $('.open').hide();
                }
            })
        });
        $(document).ready(function () {
            $("#submit").click(function () {
                var name = $("#name").val();
                var email = $("#email").val();
                var message = $("#message").val();
                var contact = $("#contact").val();
                $("#returnmessage").empty(); // To empty previous error/success message.
// Checking for blank fields.
                if (name == '' || email == '' || contact == '') {
                    alert("Please Fill Required Fields");
                } else {
// Returns successful data submission message when the entered information is stored in database.
                    $.post("contact_form.php", {
                        name: name,
                        email: email,
                        message: message,
                        contact: contact
                    }, function (data) {
                        $("#returnmessage").append(data); // Append returned message to message paragraph.
                        if (data == "Your Query has been received, We will contact you soon.") {
                            $("#form")[0].reset(); // To reset form fields on success.
                        }
                    });
                }
            });
        });
        function sendContact() {
            var valid;
            valid = validateContact();
            if (valid) {
                jQuery.ajax({
                    url: "contact_mail.php",
                    data: 'userName=' + $("#userName").val() + '&userEmail=' +
                            $("#userEmail").val() + '&subject=' +
                            $("#subject").val() + '&content=' +
                            $(content).val(),
                    type: "POST",
                    success: function (data) {
                        $("#mail-status").html(data);
                    },
                    error: function () {}
                });
            }
        }

        $("a").on('click', function (event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            }
        });
    });
});