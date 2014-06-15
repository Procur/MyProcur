$( ".typeToggle.buyer" ).click(function() {
  $.get( "http://localhost:1337/togglemode", { mode: "supplier" } );
});

$( ".typeToggle.supplier" ).click(function() {
  $.get( "http://localhost:1337/togglemode", { mode: "buyer" } );
});


