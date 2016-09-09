$(document).ready(function(){
  $(".humberger").click(function(){
    $(this).next().slideToggle();
      if($(this).find('img.toggleicon').attr('src') == "./images/top/next_icon.png"){
        $(this).find('img.toggleicon').attr('src','./images/top/down_icon.png');
      }else{
        $(this).find('img.toggleicon').attr('src','./images/top/next_icon.png');
      }
  });

  $('.owl-carousel').owlCarousel({
      loop:true,
      nav:false,
      items:1,
      autoplay:true
  });
});