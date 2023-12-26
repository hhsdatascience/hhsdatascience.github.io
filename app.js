// app.js

// Smooth scrolling
$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
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
      }, 800, function() {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
// app.js

// Add a class to the navigation links on page load
$(document).ready(function() {
  $("nav li a").each(function() {
    $(this).addClass("underline-width");
  });
});

// Update the underline width on hover
$("nav li a").hover(
  function() {
    // On hover, set the width based on the text content
    $(this).find(".underline").width($(this).width());
  },
  function() {
    // On hover out, reset the width to 0
    $(this).find(".underline").width(0);
  }
);

// Add your additional JavaScript code for other interactions/animations here
