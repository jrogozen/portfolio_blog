$(document).ready(function(){

  function goToByScroll(id){
      // Remove "link" from the ID
      // Scroll
    $('html,body').animate({
      scrollTop: $("."+id).offset().top}, 'slow');
  }


  $('.portfolio-slide').slick();

  $('.back-to-top').click(function(){
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  });

  $('.skills-link').click(function(){
    goToByScroll("skills");
  });

  $('.portfolio-link').click(function(){
    goToByScroll("portfolio");
  });

  $('.contact-link').click(function() {
    goToByScroll("social");
  });



});