$(function(){
  $(".banner_main").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    dots:true,
  });


  $(".slide5").slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    nextArrow:".next",
    prevArrow:".prev",
    centerPadding:"0px",
    centerMode:true,
    speed:500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
  
    ]
  });



  new VenoBox({
    selector: ".maya"
});


  new VenoBox({
    selector: ".my-link"
});


  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })


  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

$(".testi_slick_slider").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  centerPadding: "0px",
  centerMode: true,
  arrows:false,
  dots:true,
});

})  





$("#colorful").colorfulTab();

