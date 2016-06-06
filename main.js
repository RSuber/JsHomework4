var Costanza = "";
Albums[5].Photos.forEach(function(element){
   Costanza += `<img src='${element}' class=Costanza />`
});
var Samh = "";
Albums[0].Photos.forEach(function(element){
   Samh += `<img src='${element}' class=Samh />`
});
var Ethan = "";
Albums[1].Photos.forEach(function(element){
   Ethan += `<img src='${element}' class=Ethan />`
});
var John = "";
Albums[3].Photos.forEach(function(element){
   John += `<img src='${element}' class=Joey />`
});
var Joey = "";
Albums[2].Photos.forEach(function(element){
   Joey += `<img src='${element}' class=Reviewbrah />`
});
var Pupinia ="";
Albums[4].Photos.forEach(function(element){
   Pupinia += `<img src='${element}' class=Pupinia />`
});
//Hides all of the uneeded elements at the loadup of the DOM
//probably a better way to do this but this is the method I'm using
$(document).ready(function () {
  $('aside').append(Costanza);
  $('aside').append(Samh);
  $('aside').append(Ethan);
  $('aside').append(John);
  $('aside').append(Joey);
  $('aside').append(Pupinia);

$('.Samh').toggleClass("inactive").toggle();
$('.Costanza').toggleClass("inactive").toggle();
$('.Navbar').toggleClass("off").toggle();
$('.Ethan').toggleClass("inactive").toggle();
$('.Reviewbrah').toggleClass("inactive").toggle();
$('.Joey').toggleClass("inactive").toggle();
$('.Pupinia').toggleClass("inactive").toggle();


//Switch to the Costanza album
$('#Album1').click(function() {
  $('.Costanza').toggleClass("active").removeClass("inactive").toggle()
  $('.Album').toggleClass("active").removeClass("inactive").toggle()
  $('.Navbar').toggleClass("on").removeClass("off").toggle()
});
//Switch to the Sam Hyde Album
$('#Album2').click(function() {
  $('.Samh').toggleClass("active").removeClass("inactive").toggle()
  $('.Album').toggleClass("active").removeClass("inactive").toggle()
  $('.Navbar').toggleClass("on").removeClass("off").toggle()
});
//Switch to the H3h3 Album
$('#Album3').click(function() {
  $('.Ethan').toggleClass("active").removeClass("inactive").toggle()
  $('.Album').toggleClass("active").removeClass("inactive").toggle()
  $('.Navbar').toggleClass("on").removeClass("off").toggle()
});
//Switch to the Reviewbrah Album
$('#Album4').click(function() {
  $('.Reviewbrah').toggleClass("active").removeClass("inactive").toggle()
  $('.Album').toggleClass("active").removeClass("inactive").toggle()
  $('.Navbar').toggleClass("on").removeClass("off").toggle()
});
//Switch to the JoeysWorldTour album
$('#Album5').click(function() {
  $('.Joey').toggleClass("active").removeClass("inactive").toggle()
  $('.Album').toggleClass("active").removeClass("inactive").toggle()
  $('.Navbar').toggleClass("on").removeClass("off").toggle()
});
//Switch to the OurThirdLife album
$('#Album6').click(function() {
  $('.Pupinia').toggleClass("active").removeClass("inactive").toggle()
  $('.Album').toggleClass("active").removeClass("inactive").toggle()
  $('.Navbar').toggleClass("on").removeClass("off").toggle()
});

//Switch to the Costanza album via Navbar
$('.Cos').click(function(){
  if ($('.Costanza').attr('class')==='Costanza inactive'){
    $('img.active').toggleClass('inactive').removeClass('active').toggle()
    $('.Costanza').removeClass('inactive').toggleClass('active').toggle()
  }
  })
//Switch to Sam Hyde album via Navbar
$('.Sam').click(function(){
  if ($('.Samh').attr('class')==='Samh inactive'){
    $('img.active').toggleClass('inactive').removeClass('active').toggle()
    $('.Samh').removeClass('inactive').toggleClass('active').toggle()
  }
  })
//Switch to the H3h3 Album via Navbar
$('.h3').click(function(){
  if ($('.Ethan').attr('class')==='Ethan inactive'){
    $('img.active').toggleClass('inactive').removeClass('active').toggle()
    $('.Ethan').removeClass('inactive').toggleClass('active').toggle()
}
})
//Switch to the JoeysWorldTour via Navbar
$('.joey').click(function(){
  if ($('.Joey').attr('class')==='Joey inactive'){
    $('img.active').toggleClass('inactive').removeClass('active').toggle()
    $('.Joey').removeClass('inactive').toggleClass('active').toggle()
  }
})
//Switch to the Pupinia album
$('.pup').click(function(){
  if ($('.Pupinia').attr('class')==='Pupinia inactive'){
    $('img.active').toggleClass('inactive').removeClass('active').toggle()
    $('.Pupinia').removeClass('inactive').toggleClass('active').toggle()
  }
})
//Switch to the REviewbrah album via navbar
$('.brah').click(function(){
  if ($('.Reviewbrah').attr('class')==='Reviewbrah inactive'){
    $('img.active').toggleClass('inactive').removeClass('active').toggle()
    $('.Reviewbrah').removeClass('inactive').toggleClass('active').toggle()
  }
})
  })
