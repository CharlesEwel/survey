$(document).ready(function() {
  $("form#fullName").submit(function() {
    var name = $("input#name").val();
    $("div#hideOnClick").toggle();
    $("button#hidden").toggle();
    $("#personalinfo h1").remove();
    $("#personalinfo").prepend("<h1>"+name+"</h1>");
    event.preventDefault();
  });

  $("form#birthday").submit(function() {
    var dob = $("input#dob").val();
    $("#personalinfo h2").remove();
    $("#personalinfo").append("<h2>"+dob+"</h2>");
    event.preventDefault();
  });

  $("form#food").submit(function() {
    var favfood = $("input#favfood").val();
    $("#foodlist").append("<li>"+favfood+"</li>")
    event.preventDefault();
  });
});
