$(document).ready(function(){
  $(".title").click(function(){
    $(this).next().slideToggle();
  });
});