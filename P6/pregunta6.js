$("#p1").replaceWith("Hola Mundo")

$("#p1").click(function() {
  $(this).replaceWith( "<p>" + $( this ).text() + "</p>" );
});