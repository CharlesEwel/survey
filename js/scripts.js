$(document).ready(function() {
  $("form#fullName").submit(function() {
    var name = $("input#name").val();
    $("div#hideOnClick").toggle();
    $("button#hidden").toggle();
    $("#infooutput h1").remove();
    $("#infooutput").prepend("<h1>"+name+"</h1>");
    event.preventDefault();
  });

  $("form#birthday").submit(function() {
    var dob = $("input#dob").val();
    var dobstring = dob.toString();
    var americandob = dobstring.charAt(5)+dobstring.charAt(6)+"/"+dobstring.charAt(8)+dobstring.charAt(9)+"/"+dobstring.charAt(0)+dobstring.charAt(1)+dobstring.charAt(2)+dobstring.charAt(3);
    $("div#hideOnClick2").toggle();
    $("button#hidden2").toggle();
    $("#infooutput h2").remove();
    $("#infooutput").append("<h2>Birthday: "+americandob+"</h2>");
    event.preventDefault();
  });

  $("form#food").submit(function() {
    var favfood = $("input#favfood").val();
    $("#foodlist").append("<li>"+favfood+"</li>")
    event.preventDefault();
  });

  $("form#music").submit(function() {
    var musicgenre = $("input:radio[name=music]:checked").val();
    $("#musicoutput h3").remove();
    $("#musicoutput").append("<h3>"+musicgenre+"</h3>")
    event.preventDefault();
  });

  $("form#colorscheme").submit(function() {
    var color1 = $("#color1").val();
    var color2 = $("#color2").val();
    var color3 = $("#color3").val();
    $("body").css("background-color", color1);
    console.log( $("body").attr("background-color"));
    $("body").css("color", color2);
    $("button").css("background-color", color3);
    event.preventDefault();
  });

  $("form#socmed").submit(function() {
    var platform = $("#platform").val();
    $("#socmed-output h3").remove();
    $("#socmed-output").append("<h3>"+platform+"</h3>")
    event.preventDefault();
  });

  // $("select").click(function(){
  //   var platform = $ ("#platform").val();
  //   $("#socmed-output h3").remove();
  //   $("#socmed-output").append("<h3>"+platform+"</h3>")
  //   event.preventDefault();
  // });
});
