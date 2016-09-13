$(document).ready(function(){
  $(".mobile-menu-button").click(function(){
    $(".mobile-dropmenu").slideToggle();
  });
  
  
  
  $(".humberger").click(function(){
    if($(this).find('img.toggleicon').attr('src') == "./images/top/next_icon.png"){
      $(this).find('img.toggleicon').attr('src','./images/top/down_icon.png');
    }else{
      $(this).find('img.toggleicon').attr('src','./images/top/next_icon.png');
    }
    $(this).next().slideToggle();
  });

  $('.owl-carousel').owlCarousel({
      loop:true,
      nav:false,
      items:1,
      autoplay:true
  });
  
  $(".thumbs li img").click(function(){
    var img_src = $(this).attr("src");
    $(".main-img").attr("src", img_src);
  });  
});