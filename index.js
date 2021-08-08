var helloWorld = "Hello World!";
console.log(helloWorld);

$(document).ready(function(){
    $(".button").on({
      mouseenter: function(){
        $(this).css("background-color", "orange");
      },  
      mouseleave: function(){
        $(this).css("background-color", "black");
      }, 
      click: function(){
        $(this).css("background-color", "orange");
      }  
    });
  });