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
Albums[2].Photos.forEach(function(element){
   John += `<img src='${element}' class=Reviewbrah />`
});
var Joey = "";
Albums[3].Photos.forEach(function(element){
   Joey += `<img src='${element}' class=Joey />`
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
$('.Navbar').toggleClass("inactive").toggle();
$('.Ethan').toggleClass("inactive").toggle();
$('.Reviewbrah').toggleClass("inactive").toggle();
$('.Joey').toggleClass("inactive").toggle();
$('.Pupinia').toggleClass("inactive").toggle();


//Switch to the Costanza album
$('#Album1').click(function() {
  $('.Costanza').toggleClass("inactive").toggle()
  $('.Album').toggleClass("inactive").toggle()
  $('.Navbar').toggleClass("inactive").toggle()
});
//Switch to the Sam Hyde Album
$('#Album2').click(function() {
  $('.Samh').toggleClass("inactive").toggle()
  $('.Album').toggleClass("inactive").toggle()
  $('.Navbar').toggleClass("inactive").toggle()
});
//Switch to the H3h3 Album
$('#Album3').click(function() {
  $('.Ethan').toggleClass("inactive").toggle()
  $('.Album').toggleClass("inactive").toggle()
  $('.Navbar').toggleClass("inactive").toggle()
});
//Switch to the Reviewbrah Album
$('#Album4').click(function() {
  $('.Reviewbrah').toggleClass("inactive").toggle()
  $('.Album').toggleClass("inactive").toggle()
  $('.Navbar').toggleClass("inactive").toggle()
});
//Switch to the JoeysWorldTour album
$('#Album5').click(function() {
  $('.Joey').toggleClass("inactive").toggle()
  $('.Album').toggleClass("inactive").toggle()
  $('.Navbar').toggleClass("inactive").toggle()
});
//Switch to the OurThirdLife album
$('#Album6').click(function() {
  $('.Pupinia').toggleClass("inactive").toggle()
  $('.Album').toggleClass("inactive").toggle()
  $('.Navbar').toggleClass("inactive").toggle()
});
//Switch to the Costanza album via Navbar
$('.Cos').click(function(){
  if($('img').attr('class') === 'Costanza'){
    $('.Costanza').attr('style')=== 'display:inline-block';
  }

});
//Switch to the Sam Hyde Album via Navbar
$('.Sam').click(function(){
  if($('.Samh').attr('class') === 'Samh inactive'){
    $('.Samh').toggleClass("inactive").toggle();
    $('.Costanza').toggleClass("inactive").toggle();
  }})
})
